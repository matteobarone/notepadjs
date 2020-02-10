function set(key, value) {
    window.localStorage.setItem(key, value);
}

function get(key) {
    return window.localStorage.getItem(key);
}

function remove(key) {
    window.localStorage.removeItem(key);
}

export const localStorage = {
    set,
    get,
    remove,
}