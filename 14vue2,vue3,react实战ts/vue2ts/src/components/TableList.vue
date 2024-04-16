<template>
  <div class="hello">
    <button @click="sortByTimeBtn(list)">按时间排序</button>
    <li v-for="item in list" :key="item.time">
      {{ `${item.name}-${item.time}` }}
    </li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {timeData,sortByTime} from "@/util/util";
type tableListDataType = { // 设置 data 的限制类型 必须包含 字段list，且list的值类型为 list: timeData数组
  list: timeData[]
}
/*
// 常规写法 -- 也可以，没有问题，能够正常显示
export default {
  name: 'TableList',
  data(): tableListDataType {
    return {
      list: [{time: "2024-04-16 16:22:00", name: "now"}]
    }
  },
  mounted() {
    setTimeout(() => {
      /!*这样写会报错，是ts检查的错误，实际上页面上已经渲染出list内容了，
        报错内容 TS2339: Property 'list' does not exist on type '{ name: string; data(): tableListDataType; mounted(): void; }'.
        可以在 tsconfig.json 的 compilerOptions内添加配置 "noImplicitThis": false, 解决此问题
      *!/

      this.list = [
        {time: "2024-04-16 16:30:01", name: "mounted1"},
        {time: "2024-04-16 16:30:02", name: "mounted2"},
        {time: "2024-04-16 16:30:03", name: "mounted3"},
        {time: "2024-04-16 16:30:04", name: "mounted4"},
      ]
    }, 1000)
  }
};
*/

/**
 * 关于 Vue.extend，
 * Vue.extend接受一个配置对象，返回一个根据配置对象生成的类class
 */
export default Vue.extend({
  name: 'TableList',
  data(): tableListDataType {
    return {
      list: [{time: "2024-04-16 16:22:00", name: "now"}]
    }
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        {time: "2024-04-19 16:30:01", name: "mounted9"},
        {time: "2024-04-15 16:30:02", name: "mounted5"},
        {time: "2024-04-16 16:30:03", name: "mounted6"},
        {time: "2024-04-18 16:30:04", name: "mounted8"},
      ]
    }, 1000)
  },
  methods: {
    sortByTimeBtn(arr:timeData[]) {
      this.list = sortByTime(arr)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
