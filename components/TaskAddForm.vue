<script setup lang="ts">
const { addTask } = useTasks();
const task = ref<string>("");
const onClickAddButton = () => {
  addTask(task.value);
  task.value = "";
};
</script>
<template>
  <div>
    <input type="text" v-model="task" />
    <button @click="onClickAddButton">追加</button>
  </div>
</template>
