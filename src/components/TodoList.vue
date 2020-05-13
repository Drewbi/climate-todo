<template>
  <div class="todoList">
    <h3>{{ title }}</h3>
    <TodoItem v-for="item in items" :key="item.id" :todo="item" />
    <p v-show="items.length === 0"><slot/></p>
  </div>
</template>

<script>
import TodoItem from "./TodoItem"
export default {
  components: {
    TodoItem
  },
  props: {
    items: {
      type: Array
    },
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
  .todoList {
    width: 30%;
    margin: 10px;
    border-radius: 5px;
  }
</style>