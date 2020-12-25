import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <>
        <el-button>这是ElButton</el-button>
      </>
    );
  },
});
