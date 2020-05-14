<template>
  <div id="app">
    <Header title="Climate Todo" subtitle="Take the Next Step" />
    <TodoList title="Remaining Steps" :todos="sortIncomplete" emptyText="All steps complete!">
      <div id="addButton" @click="newTodo">Add Step</div>
    </TodoList>
    <EditTodo v-if="modalOpen"/>
    <TodoList title="Steps Completed" :todos="getComplete" emptyText="No completed steps" />
  </div>
</template>

<script>
import seeds from "./data/todos"
import Header from './components/Header.vue'
import TodoList from './components/TodoList.vue'
import EditTodo from './components/EditTodo.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Header,
    TodoList,
    EditTodo
  },

  mounted() {
    seeds.forEach(seed => this.saveNewTodo(seed))
  },

  computed: {
    ...mapGetters([
      'getComplete',
      'getIncomplete',
      'modalOpen'
      ]),
    sortIncomplete(){
      const sortingArray = [...this.getIncomplete] // Clone to sort in place
      return sortingArray.sort((todo1, todo2) => {
        const score1 = todo1.urgency / todo1.difficulty
        const score2 = todo2.urgency / todo2.difficulty
        return score2 - score1 // Highest scores will come first
      })
    }
  },

  methods: {
    ...mapMutations([
      'closeModal',
      'newTodo',
      'saveNewTodo'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  transition: background-color 0.5s;
}

#addButton:hover {
  cursor: pointer;
  background-color: #d4f2e9;
}
</style>
