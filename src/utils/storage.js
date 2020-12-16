const storage = {
  get(key) {
    return localStorage.getItem(key);
  },
  set(key, value) {
    localStorage.setItem(key, value);
  },
  setJSON(key, json) {
    this.set(key, JSON.stringify(json));
  },
  getJSON(key) {
    const data = this.get(key);
    return JSON.parse(data);
  },
};

export default storage;
