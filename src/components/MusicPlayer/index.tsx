import { defineComponent } from 'vue';
import './style.scss';

export default defineComponent({
  name: 'MusicPlayer',
  setup() {
    const showDuration = (percentage: number) => {
      console.log(percentage);
      return '12:23/45:67';
    };
    return () => (
      <div class="music-player">
        <div class="desc">
          <el-image
            src="https://y.gtimg.cn/music/photo_new/T002R800x800M000000uEq464Qoqho.jpg?max_age=2592000"
            fit="cover"
          />
          <div class="info">
            <h1>キリフ</h1>
            <h2>PENGUIN RESEARCH</h2>
          </div>
        </div>
        <div class="progress">
          <el-progress percentage="50.34" format={showDuration}></el-progress>
        </div>
        <div class="control">
          <el-button icon="fa-icon-step-backward" type="primary" circle />
          <el-button icon="fa-icon-play" type="primary" circle />
          <el-button icon="fa-icon-step-forward" type="primary" circle />
        </div>
      </div>
    );
  },
});
