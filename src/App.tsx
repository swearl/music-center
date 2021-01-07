import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <el-container class="app-container">
        <el-header class="nav">
          <app-header />
        </el-header>
        <el-container>
          <el-aside>
            <side-menu />
          </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    );
  },
});
