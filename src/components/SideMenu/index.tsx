import { defineComponent } from 'vue';
import './style.scss';

export default defineComponent({
  name: 'SideMenu',
  setup() {
    return () => (
      <el-menu class="side-menu" router default-active="/">
        <el-menu-item index="/">音乐中心</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
    );
  },
});
