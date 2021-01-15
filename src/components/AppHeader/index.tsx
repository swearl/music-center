import { defineComponent, ref } from 'vue';
import './style.scss';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const input = ref('');
    const onInput = (item: string) => {
      console.log(item, input.value);
    };
    return () => (
      <el-row class="app-header" type="flex" justify="space-between" align="middle">
        <el-col span="12">
          <el-input
            placeholder="请输入内容"
            v-model={input.value}
            prefix-icon="el-icon-search"
            clearable
            onChange={onInput}
          ></el-input>
        </el-col>
        <el-col span="12">
          <el-avatar alt="用户">用户</el-avatar>
        </el-col>
      </el-row>
    );
  },
});
