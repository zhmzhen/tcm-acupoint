// 公共函数 - TCM养生应用

// 获取今天是一年中的第几天
function getDayOfYear() {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// 格式化今日日期
function getTodayString() {
    const today = new Date();
    return `${today.getMonth() + 1}月${today.getDate()}日`;
}

// 根据日期轮换获取数组中的项
function getDailyItem(array) {
    const dayOfYear = getDayOfYear();
    return array[dayOfYear % array.length];
}

// localStorage 工具函数
const storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            return defaultValue;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('localStorage error:', e);
        }
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};

// 返回首页
function goHome() {
    window.location.href = 'index.html';
}

// 计算两点之间的距离（用于定位）
function calculateDistance(lat1, lng1, lat2, lng2) {
    const latDiff = lat1 - lat2;
    const lngDiff = lng1 - lng2;
    return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
}

// 获取用户位置
function getUserLocation(callback, errorCallback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                callback(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.log('定位失败:', error.message);
                if (errorCallback) errorCallback(error);
            },
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 300000
            }
        );
    } else if (errorCallback) {
        errorCallback(new Error('浏览器不支持定位'));
    }
}

// 显示加载状态
function showLoading(container) {
    container.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> 加载中...</div>';
}

// 页面初始化完成后执行
function onReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}
