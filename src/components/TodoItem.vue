<template>
  <div class="todoItem" @click="toggleTodo(todo.id)">
    <p>{{ todo.text }}</p>
    <input type="checkbox" name="completed" :checked="todo.complete">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    todo: {
      id: {
        type: Number,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      urgency: {
        type: Number,
        required: true
      },
      difficulty: {
        type: Number,
        required: true
      },
      completed: {
        type: Boolean,
        required: true
      }
    }
  },
  methods: {
    ...mapMutations([
      'toggleTodo'
    ])
  }
}
</script>

<style scoped>
  .todoItem {
    border-radius: 5px;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.08);
    width: 90%;
    margin: 10px;
    padding: 10px;
    text-align: left;
    transition: background-color 0.1s;
  }
  .todoItem:hover {
    background-color: #fcfcfc;
  }
  p {
    display: inline-block;
    margin: 0;
    max-width: 80%;
  }
  input {
    float: right;
  }
</style>