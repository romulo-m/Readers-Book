import Cookie from 'js-cookie';

const storage = {};
try {
  if (!window.localStorage) {
    throw Error('no local storage');
  }
  storage.set = (token, value) => localStorage.setItem(token, JSON.stringify(value));
  storage.get = (token) => {
    const item = localStorage.getItem(token);
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  };
  storage.remove = token => localStorage.removeItem(token);
} catch (e) {
  storage.set = Cookie.set;
  storage.get = Cookie.getJSON;
  storage.remove = Cookie.remove;
}

export default storage;
