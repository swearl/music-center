import { defineComponent } from 'vue';
import './style.scss';

export default defineComponent({
  name: 'SideMenu',
  setup() {
    return () => (
      <el-menu class="side-menu" router default-active="/">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
    );
  },
});
