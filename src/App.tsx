import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <el-container class="app-container">
        <el-container>
          <el-aside>
            <side-menu />
          </el-aside>
          <el-container>
            <el-header class="header">
              <app-header />
            </el-header>
            <el-main>
              <router-view />
            </el-main>
          </el-container>
        </el-container>
        <el-footer class="footer">
          <music-player />
        </el-footer>
      </el-container>
    );
  },
});
