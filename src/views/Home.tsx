import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <>
        <el-button type="primary">这是ElButton</el-button>
      </>
    );
  },
});
