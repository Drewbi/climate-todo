<template>
  <div id="app">
    <Header title="Climate Todo" subtitle="Take the Next Step" />
    <TodoList title="Remaining Steps" :items="getIncomplete">All steps complete!</TodoList>
    <TodoList title="Steps Completed" :items="getComplete">No completed steps</TodoList>
  </div>
</template>

<script>
import seeds from "./data/todos"
import Header from './components/Header.vue'
import TodoList from './components/TodoList.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    TodoList
  },
  computed: {
    ...mapGetters(['getComplete', 'getIncomplete'])
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
</style>
