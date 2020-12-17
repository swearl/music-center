import _ from 'lodash';

const result = {
  format(server, type, data) {
    const func = _.camelCase(`format ${server} ${type}`);
    return this[func](data);
  },
  formatTencentPlaylist(data) {
    const playlist = data.data.data.cdlist[0];
    const server = 'tencent';
    // console.log(playlist);
    const result = {
      title: playlist.dissname,
      image: playlist.dir_pic_url2,
      desc: playlist.desc,
      songs: playlist.songlist.map((item) => {
        return {
          title: item.title,
          author: item.singer.map((artist) => artist.name).join(', '),
          album: item.album.name,
          duration: item.interval,
          server,
          id: item.mid,
          url: `${process.env.METING_SERVER}?server=${server}&type=url&id=${item.mid}`,
          pic: `${process.env.METING_SERVER}?server=${server}&type=pic&id=${item.album.mid}`,
          lrc: `${process.env.METING_SERVER}?server=${server}&type=lrc&id=${item.mid}`,
          playing: false,
          vip: item.pay.pay_play === 1 ? true : false,
        };
      }),
    };
    return result;
  },
};
export default result;
