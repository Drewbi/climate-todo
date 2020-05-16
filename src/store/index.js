import Vue from 'vue'
import Vuex from 'vuex'
import firestore from '../config/firebaseConfig'
Vue.use(Vuex)

const state = {
  db: firestore,
  todos: [],
  editModal: false,
  selectedTodo: null
}

const getters = {
  getSelected: state => {
    return state.selectedTodo
  },
  isNewTodo: state => {
    return !state.selectedTodo
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
  openModal (state) {
    state.editModal = true
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

const actions = {
  async addTodoDB({ state }, newTodo) {
    delete newTodo.id
    await state.db.collection('todos').add(newTodo)
  },
  async toggleTodoDB({ dispatch }, toggleTodo) {
    toggleTodo.complete = !toggleTodo.complete
    await dispatch('updateTodoDB', toggleTodo)
  },
  async updateTodoDB({ state }, updateTodo) {
    const { id, ...formattedTodo } = updateTodo
    await state.db.collection('todos').doc(id).update(formattedTodo)
  },
  async removeTodoDB({ state }, deleteTodo) {
    const { id } = deleteTodo
    await state.db.collection('todos').doc(id).delete()
  },
}

export default new Vuex.Store({ state, getters, mutations, actions })