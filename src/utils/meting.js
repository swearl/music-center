import api from './api';
import result from './result';

const meting = {
  playlist(server, id) {
    return new Promise((resolve, reject) => {
      api
        .playlist(server, id, false)
        .then((res) => resolve(result.format(server, 'playlist', res)))
        .catch((error) => reject(error));
    });
  },
};

export default meting;
