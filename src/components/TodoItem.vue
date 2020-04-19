<template>
  <div>{{todo.title}}</div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object
    }
  }
};
</script>

<style>
</style>