<template>
  <div>
    <h3>Todo List</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span class="legendGuide">
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span class="legendGuide">
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todolist">
      <TodoItem
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{'is-complete': !todo.completed}"
        :todo="todo"
      />
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
    this.fetchTodos();
  }
};
</script>

<style scoped>
div h3 {
  margin-top: 0px;
}

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

.legend {
  display: flex;
  margin-bottom: 1rem;
}

.legendGuide {
  margin-left: 20px;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 600px) {
  .todolist {
    grid-template-columns: 1fr;
  }
}
</style>