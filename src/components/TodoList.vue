<template>
  <div id="todoList">
    <h3>{{ title }}</h3>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    <p v-show="todos.length === 0">{{ emptyText }}</p>
    <slot />
  </div>
</template>

<script>
import TodoItem from "./TodoItem"

export default {
  components: {
    TodoItem
  },

  props: {
    todos: {
      type: Array
    },
    title: {
      type: String
    },
    emptyText: {
      type: String
    }
  }
}
</script>

<style scoped>
  #todoList {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: 10px;
    border-radius: 5px;
  }

  @media screen and (max-width: 500px) {
    #todoList {
         width: 95%;
    }
  }
</style>