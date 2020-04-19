<template>
  <div>
    <h3>todo list</h3>
    <div class="todolist">
      <TodoItem v-for="todo in allTodos" :key="todo.id" class="todo" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoItem from "./TodoItem";

export default {
  name: "todolist",
  components: {
    TodoItem
  },
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos"])
  },
  created() {
    this.fetchTodos()
  }
};
</script>

<style scoped>
.todolist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>