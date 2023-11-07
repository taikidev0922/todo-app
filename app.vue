<script setup lang="ts">
const { tasks, editTask, deleteTask } = useTasks();
</script>
<template>
  <div>
    <TaskAddForm />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" :checked="task.done" />
        <input type="text" :value="task.name" @input="editTask(task)" />
        <input type="button" value="削除" @click="deleteTask(task)" />
      </li>
    </ul>
  </div>
</template>
