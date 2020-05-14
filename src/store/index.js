import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const findUniqueId = () => {
  const range = [...Array(state.todos.length + 1).keys()]
  return range.filter(number => {
    return !state.todos.some(todo => todo.id === number)
  })[0]
} 

const state = {
  todos: [],
  editModal: false,
  selectedTodo: null
}

const getters = {
  getSelected: state => {
    return state.selectedTodo
  },
  isNewTodo: state => {
    return !state.selectedTodo || !state.todos.some(todo => todo.id === state.selectedTodo.id)
  },
  getIncomplete: state => {
    return state.todos.filter(todo => !todo.complete)
  },
  getComplete: state => {
    return state.todos.filter(todo => todo.complete)
  },
  modalOpen: state => {
    return state.editModal
  }
}

const mutations = {
  newTodo (state) {
    const id = findUniqueId()
    const todo = {
      id,
      text: '',
      urgency: 1,
      difficulty: 1,
      complete: false
    }
    state.selectedTodo = todo
    state.editModal = true
  },
  saveNewTodo (state, todo) {
    state.todos.push(todo)
    state.selectedTodo = null
    state.editModal = false
  },
  updateTodo (state, update) {
    const { todos } = state
    const targetTodo = todos.find(todo => todo.id === update.id)
    Object.assign(targetTodo, update)
    state.selectedTodo = null
    state.editModal = false
  },
  removeTodo (state, id) {
    const { todos } = state
    const index = todos.findIndex(todo => todo.id === id)
    if (index >= 0) todos.splice(index, 1)
  },
  toggleTodo (state, id) {
    const { todos } = state
    const todo = todos.find(todo => todo.id === id)
    if(todo) todo.complete = !todo.complete
  },
  closeModal (state) {
    state.editModal = false
    state.selectedTodo = null
  },
  setSelectedTodo (state, id) {
    const { todos } = state
    const todo = todos.find(todo => todo.id === id)
    state.selectedTodo = todo
    state.editModal = true
  }
}

export default new Vuex.Store({ state, getters, mutations })