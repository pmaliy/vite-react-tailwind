import localforage from 'localforage';

export const set = (key, value) => {
  return localforage.setItem(key, value);
};

export const get = (key) => {
  return localforage.getItem(key);
};
