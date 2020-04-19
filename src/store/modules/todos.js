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
    console.log("response", response.data);
    commit("addNewTodo", response.data);
  },
};

const mutations = {
  setTodos(state, data) {
    state.todos = data;
  },
  addNewTodo(state, newTodo) {
    state.todos = [newTodo, ...state.todos];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
