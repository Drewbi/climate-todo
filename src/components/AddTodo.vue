<template>
  <div id="addTodoModal" >
    <div id="modal">
      <h3>Add Step</h3>
      <div class="todoInput todoText">
        <input type="text" name="text" placeholder="Step Description" v-model="text">
      </div>
      <div class="todoInput todoSlider">
        <label for="urgency">Urgency</label>
        <input type="range" min="1" max="100" value="50" class="slider" name="urgency" v-model="urgency">
      </div>
      <div class="todoInput todoSlider">
        <label for="difficulty">Difficulty</label>
        <input type="range" min="1" max="100" value="50" class="slider" name="difficulty" v-model="difficulty">
      </div>
      <div id="submit" @click="submitTodo">Add</div>
    </div>
    <div id="modalBackground" @click="emitClose" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    text: '',
    urgency: 1,
    difficulty: 1
  }),
  methods: {
    ...mapMutations(['addTodo']),
    emitClose() {
      this.$emit('close')
    },
    submitTodo(){
      const todo = {
        text: this.text,
        urgency: this.urgency,
        difficulty: this.difficulty,
        complete: false
      }
      this.addTodo(todo)
      this.emitClose()
    }
  }
}
</script>

<style scoped>
  #addTodoModal {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #modalBackground {
    background-color: rgba(0, 0, 0, 0.03);
    width: 100%;
    height: 100%;
  }
  #modal {
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    width: 400px;
    left: calc(50% - 200px);
    height: 300px;
    top: calc(50% - 150px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    #modal {
      width: 90%;
      left: 5%;
    }
  }
  .todoInput {
    width: 60%;
    margin: 10px;
  }
  .todoText input {
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #ddd;
    font-size: 15px;
  }
  .todoSlider {
    width: 60%;
    text-align: left;
  }
  .todoSlider label {
    display: inline-block;
    vertical-align: middle;
    color: #616161;
    font-size: 15px;
    margin: 2px 10px 2px 2px
  }
  .todoSlider input {
    display: block;
    float: right;
  }
  #submit {
    width: 200px;
    padding: 10px;
    background-color: #daf7ee;
    border-radius: 5px;
    margin: auto  0 10px 0;
  }
  #submit:hover {
    background-color: #d4f2e9;
  }
</style>