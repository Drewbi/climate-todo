<template>
  <div class="todoItem" @mouseover="isHovered = true" @mouseout="isHovered = false">
    <p>{{ todo.text }}</p>
    <i :id="todo.complete ? 'complete-icon' : 'incomplete-icon'"
      class="material-icons"
      @click="toggleTodoDB(todo)">
      {{ todo.complete ? 'check_circle_outline' : 'radio_button_unchecked' }}
    </i>
    <i v-show="isSmallScreen || isHovered" id="edit-icon" class="material-icons" @click="setSelectedTodo(todo.id)">edit</i>
    <i v-show="isSmallScreen || isHovered" id="delete-icon" class="material-icons" @click="removeTodoDB(todo)">delete</i>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

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

  data: () => ({
    isHovered: false,
    window: {
      width: 0,
      height: 0
    }
  }),

  created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },

  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },

  computed: {
    isSmallScreen(){
      return this.window.width < 800 || this.window.height < 800
    }
  },

  methods: {
    ...mapMutations([
      'removeTodo',
      'setSelectedTodo'
    ]),
    ...mapActions([
      'removeTodoDB',
      'toggleTodoDB'
    ]),
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
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
    max-width: 75%;
    cursor: default;
  }

  input {
    float: right;
  }

  .material-icons {
    color: #9ea7b0;
    float: right;
    margin: 0 3px;
    transition: color 0.3s;
  }

  .material-icons:hover {
    cursor: pointer;
    color: #828588;
  }

  #complete-icon {
    color: #78bf9a;
  }
  
  #incomplete-icon:hover {
    color: #78bf9a;
  }

</style>