// 图片缓存管理模块
// 使用 IndexedDB 存储图片，实现本地缓存

export class ImageCache {
    constructor() {
        this.dbName = 'FlowerImageCache';
        this.storeName = 'images';
        this.version = 1;
        this.db = null;
        this.cacheExpiry = 7 * 24 * 60 * 60 * 1000; // 7天过期
    }

    // 初始化数据库
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = () => {
                console.error('IndexedDB 打开失败:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const objectStore = db.createObjectStore(this.storeName, { keyPath: 'url' });
                    objectStore.createIndex('timestamp', 'timestamp', { unique: false });
                }
            };
        });
    }

    // 获取缓存的图片
    async getCachedImage(url) {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(url);

            request.onsuccess = () => {
                const result = request.result;
                if (result) {
                    // 检查是否过期
                    const now = Date.now();
                    if (now - result.timestamp < this.cacheExpiry) {
                        // 缓存有效，返回 Blob URL
                        const blobUrl = URL.createObjectURL(result.blob);
                        resolve(blobUrl);
                    } else {
                        // 缓存过期，删除并返回 null
                        this.deleteCachedImage(url);
                        resolve(null);
                    }
                } else {
                    resolve(null);
                }
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // 保存图片到缓存
    async saveImageToCache(url, blob) {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const data = {
                url: url,
                blob: blob,
                timestamp: Date.now()
            };
            const request = store.put(data);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // 删除缓存的图片
    async deleteCachedImage(url) {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.delete(url);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // 下载图片并缓存
    async downloadAndCache(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const blob = await response.blob();
            await this.saveImageToCache(url, blob);
            return URL.createObjectURL(blob);
        } catch (error) {
            console.error('下载图片失败:', error);
            throw error;
        }
    }

    // 获取图片（优先使用缓存）
    async getImage(url) {
        try {
            // 先检查缓存
            const cachedUrl = await this.getCachedImage(url);
            if (cachedUrl) {
                return cachedUrl;
            }

            // 缓存不存在，下载并缓存
            return await this.downloadAndCache(url);
        } catch (error) {
            console.error('获取图片失败:', error);
            return url; // 失败时返回原始 URL
        }
    }

    // 清理过期缓存
    async cleanExpiredCache() {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const index = store.index('timestamp');
            const now = Date.now();
            const request = index.openCursor();

            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    if (now - cursor.value.timestamp >= this.cacheExpiry) {
                        cursor.delete();
                    }
                    cursor.continue();
                } else {
                    resolve();
                }
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // 获取缓存大小（估算）
    async getCacheSize() {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.getAll();

            request.onsuccess = () => {
                let totalSize = 0;
                request.result.forEach(item => {
                    totalSize += item.blob.size;
                });
                resolve(totalSize);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // 清空所有缓存
    async clearAllCache() {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.clear();

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }
}

// 仅在浏览器环境自动初始化（非测试环境）
if (typeof window !== 'undefined' && typeof process === 'undefined') {
  const imageCache = new ImageCache();
  window.imageCache = imageCache;

  imageCache.init().then(() => {
      console.log('图片缓存系统初始化成功');
      setInterval(() => {
          imageCache.cleanExpiredCache();
      }, 24 * 60 * 60 * 1000);
  }).catch(error => {
      console.error('图片缓存系统初始化失败:', error);
  });
}
