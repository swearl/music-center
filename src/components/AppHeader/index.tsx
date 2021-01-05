import { defineComponent } from 'vue';
import './style.scss';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    return () => (
      <el-row class="app-header" type="flex" justify="space-between" align="middle">
        <el-col span="12">
          <h1>音乐中心</h1>
        </el-col>
        <el-col span="12">用户</el-col>
      </el-row>
    );
  },
});
