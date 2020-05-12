const state = () => ({
  todos: []
})

const getters = {
  getTodo: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  },
  getIncomplete: (state) => {
    return state.todos.filter(todo => !todo.complete)
  },
  getComplete: (state) => {
    return state.todos.filter(todo => todo.complete)
  }
}

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  },
  removeTodo(state, id) {
    const { todos } = state
    const index = todos.findIndex(todo => todo.id === id)
    if (index >= 0) todos.splice(index, 1)
  },
  toggleTodo(state, id) {
    const { todos } = state
    const todo = todos.find(todo => todo.id === id)
    if(todo) todo.complete = true
  }
}

export default { state, getters, mutations }