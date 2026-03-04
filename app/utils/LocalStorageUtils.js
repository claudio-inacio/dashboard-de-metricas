

const LocalStorageUtils = {
  getItem: (keyName, object = false) => {
    const value = localStorage.getItem(keyName);

    if (!value) return null;

    return object ? JSON.parse(localStorage.getItem(keyName)) : value;
  },
  getObjectItem: (keyName, object = false) => {
    return LocalStorageUtils.getItem(keyName, true);
  },
  setItem: (keyName, value) => {
    if (typeof value === 'object') value = JSON.stringify(value);

    return localStorage.setItem(keyName, value);
  },
  clear: () => {
    return localStorage.clear();    
  },
  remove: (keyName) => {
    return localStorage.removeItem(keyName);
  },
};

export default LocalStorageUtils;
