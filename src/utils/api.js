import Axios from 'axios';

const api = {
  client: null,
  init() {
    if (this.client === null) {
      // console.log(process.env.SOCKET_SERVER);
      // const baseURL = process.env.SOCKET_SERVER;
      const headers = {
        'Content-type': 'application/json',
      };
      this.client = Axios.create({ headers });
    }
  },
  post(url, data) {
    return this.client.post(url, data);
  },
  playlist(server, id, format = true) {
    return this.post('/api/playlist', { server, id, format });
  },
  search(keyword) {
    return this.post('/api/search', { server: 'tencent', id: keyword });
  },
};

api.init();

export default api;
