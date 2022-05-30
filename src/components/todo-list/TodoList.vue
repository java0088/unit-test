<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "vue";

const todos = reactive([
  {
    id: 1,
    text: "Learn Vue.js 3",
    completed: false,
  },
]);

defineExpose({});
</script>

<style lang='scss' scoped>
</style>
