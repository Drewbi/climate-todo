<template>
  <div id="app">
    <Header title="Climate Todo" subtitle="Take the Next Step" />
    <TodoList title="Remaining Steps" :items="incompleteSorted" emptyText="All steps complete!">
      <div id="addButton" @click="addModal = true">Add Step</div>
    </TodoList>
    <AddTodoModal v-if="addModal" @close="addModal = false"/>
    <TodoList title="Steps Completed" :items="getComplete" emptyText="No completed steps" />
  </div>
</template>

<script>
import seeds from "./data/todos"
import Header from './components/Header.vue'
import TodoList from './components/TodoList.vue'
import AddTodoModal from './components/AddTodo.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    TodoList,
    AddTodoModal
  },
  data: () => ({
    addModal: false
  }),
  computed: {
    ...mapGetters(['getComplete', 'getIncomplete']),
    incompleteSorted(){
      const sortingArray = [...this.getIncomplete]
      return sortingArray.sort((todo1, todo2) => {
        const score1 = todo1.urgency / todo1.difficulty
        const score2 = todo2.urgency / todo2.difficulty
        return score2 - score1
      })
    }
  },
  methods: {
    ...mapMutations(['addTodo'])
  },
  mounted() {
    seeds.forEach(seed => this.addTodo(seed))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#addButton {
  width: 200px;
  margin-top: 10px;
  padding: 10px;
  background-color: #daf7ee;
  border-radius: 5px;
}
#addButton:hover {
  background-color: #d4f2e9;
}
</style>
