<template>
  <div @dblclick="onDblClick(todo)">
    {{todo.title}}
    <i @click="removeTodo(todo.id)" class="fas fa-trash-alt"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    removeTodo(id) {
      this.deleteTodo(id);
    },
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.updateTodo(updTodo);
    }
  }
};
</script>

<style scoped>
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>