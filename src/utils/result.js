import _ from 'lodash';

const result = {
  format(server, type, data) {
    const func = _.camelCase(`format ${server} ${type}`);
    return this[func](data);
  },
  formatTencentPlaylist(data) {
    const item = data.data.data.cdlist[0];
    const server = 'tencent';
    const result = {
      title: item.dissname,
      image: item.dir_pic_url2,
      desc: item.desc,
      songs: item.songlist.map((item) => {
        return {
          title: item.title,
          author: item.singer.map((artist) => artist.name).join(', '),
          duration: item.interval,
          server,
          id: item.mid,
          url: `${process.env.METING_SERVER}?server=${server}&type=url&id=${item.mid}`,
          pic: `${process.env.METING_SERVER}?server=${server}&type=pic&id=${item.album.mid}`,
          lrc: `${process.env.METING_SERVER}?server=${server}&type=lrc&id=${item.mid}`,
          playing: false,
        };
      }),
    };
    return result;
  },
};
export default result;
