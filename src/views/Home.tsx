import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <>
        <el-button type="primary" icon="fa-icon-play">
          这是FA Play
        </el-button>
        <el-button type="primary" icon="el-icon-search">
          这是Search
        </el-button>
      </>
    );
  },
});
