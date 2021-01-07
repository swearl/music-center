import { defineComponent } from 'vue';
import './style.scss';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    return () => (
      <el-row class="app-header" type="flex" justify="space-between" align="middle">
        <el-col span="6">
          <h1>音乐中心</h1>
        </el-col>
        <el-col span="12">
          <music-player />
        </el-col>
        <el-col span="6">
          <el-avatar alt="用户">用户</el-avatar>
        </el-col>
      </el-row>
    );
  },
});
