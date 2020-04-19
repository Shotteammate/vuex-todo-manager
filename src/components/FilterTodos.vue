<template>
  <div class="wrapper">
    <h3>Filter Todos:</h3>
    <select v-model="selected" @change="updateTodos">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodos",
  data() {
    return {
      selected: "200"
    };
  },
  methods: {
    ...mapActions(["filterTodos"]),
    updateTodos() {
      this.filterTodos(this.selected);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

select {
  margin: 20px 0 20px 10px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>