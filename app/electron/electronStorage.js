const storage = require('electron-json-storage');

module.exports = {
    KEYS: {
        EXAMPLE: 'example_storage_group',
    },
    setDefaultPath: (path) => {
        storage.setDataPath(path);
    },
    get: async (key) => {
        return new Promise((resolve, reject) => {
            storage.get(key, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        })
    },
    save: (key, value) => {
        return new Promise((resolve, reject) => {
            storage.set(key, value, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        })
    },
}