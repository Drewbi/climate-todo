<template>
  <div class="todoItem">
    <p>{{ todo.text }}</p>
    <input type="checkbox" name="completed" :checked="todo.complete">
  </div>
</template>

<script>
export default {
  props: {
    todo: {
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
  }
}
</script>

<style scoped>
  .todoItem {
    border-radius: 5px;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.08);
    margin: 20px;
    padding: 10px;
    text-align: left;
  }
  p {
    display: inline-block;
    margin: 0;
  }
  input {
    float: right;
  }
</style>