<template>
  <div class="todoList">
    <h3>{{ title }}</h3>
    <TodoItem v-for="item in items" :key="item.id" :todo="item" />
    <p v-show="items.length === 0">{{ emptyText }}</p>
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
    items: {
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
  .todoList {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: 10px;
    border-radius: 5px;
  }
  @media screen and (min-width: 500px) {
    .todoList {
      width: 500px;
    }
  }
</style>