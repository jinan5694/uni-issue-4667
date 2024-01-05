import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: '1', text: 'task 1', done: true },
      { id: '2', text: 'task 2', done: false }
    ]
  }
})