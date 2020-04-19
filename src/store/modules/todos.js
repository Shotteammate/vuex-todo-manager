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
    console.log(todos);
    commit("setTodos", todos);
  },
};
const mutations = {
  setTodos(state, data) {
    state.todos = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
