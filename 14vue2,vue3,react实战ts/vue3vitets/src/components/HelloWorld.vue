<script setup lang="ts">
import {Ref, ref, computed} from 'vue'

defineProps({
  msg: String,
})

// vue3 增加了很多的类型
const count = ref(0)
const hello = ref("hello") // 自动设置类型 ref<string>
let world:Ref<string>
// world = ref(123) // 报错
world = ref("world")

// computed()
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ hello }}</h2>
  <button @click="count++">{{ count }}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
