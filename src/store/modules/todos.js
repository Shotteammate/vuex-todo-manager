import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = response.data;
    commit("setTodos", todos);
  },
  async addTodo({ commit }, title) {
    const newTodo = {
      title,
      completed: false,
    };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newTodo
    );

    commit("addNewTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit("removeTodo", id);
  },
  async filterTodos({ commit }, limit) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTodos", response.data);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );
    console.log("updated: ", response.data);
    commit("updateTodo", response.data);
  },
};

const mutations = {
  setTodos(state, data) {
    state.todos = data;
  },
  addNewTodo(state, newTodo) {
    state.todos = [newTodo, ...state.todos];
  },
  removeTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  updateTodo(state, updTodo) {
    const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
