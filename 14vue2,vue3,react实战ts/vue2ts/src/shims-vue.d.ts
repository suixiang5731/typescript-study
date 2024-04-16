// 声明 .vue 文件，防止引入是报错
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
