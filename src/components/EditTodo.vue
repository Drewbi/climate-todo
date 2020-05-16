<template>
  <div id="modal" >
    <div id="form">
      <h3>Add Step</h3>
      <i id="close-icon" class="material-icons" @click="closeModal">close</i>
      <input class="textInput" type="text" name="text" placeholder="Step Description" v-model="todo.text">
      <div class="todoSlider">
        <label for="urgency">Urgency</label>
        <input type="range" min="1" max="100" value="50" class="slider" name="urgency" v-model="todo.urgency">
      </div>
      <div class="todoSlider">
        <label for="difficulty">Difficulty</label>
        <input type="range" min="1" max="100" value="50" class="slider" name="difficulty" v-model="todo.difficulty">
      </div>
      <div id="submit" @click="submitTodo">{{ loading ? loadingText : 'Save' }}</div>
    </div>
    <div id="modalBackground" @click="closeModal" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({
    todo: {
      id: null,
      text: '',
      urgency: 1,
      difficulty: 1,
      complete: false
    },
    loading: false,
    loadingText: ''
  }),

  computed: {
    ...mapGetters([
      'isNewTodo',
      'getSelected'
    ])
  },

  methods: {
    ...mapMutations([
      'saveNewTodo',
      'closeModal'
      ]),
    ...mapActions([
      'addTodoDB',
      'updateTodoDB'
    ]),
    async submitTodo(){
      if (!this.loading) {
        if(this.isNewTodo) {
          this.loadingText = 'Adding'
          this.loading = true
          await this.addTodoDB(this.todo)
        }
        else { 
          this.loadingText = 'Updating'
          this.loading = true
          await this.updateTodoDB(this.todo)
        }
        this.loading = false
        this.loadingText = ''
        this.closeModal()
      }
    }
  },
  
  mounted(){
    if(!this.isNewTodo) {
      this.todo = { ...this.getSelected }
    }
  }
}
</script>

<style scoped>
  #modal {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #modalBackground {
    background-color: rgba(0, 0, 0, 0.03);
    width: 100%;
    height: 100%;
  }

  #form {
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
    #form {
      width: 90%;
      left: 5%;
    }
  }

  #close-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #9ea7b0;
    cursor: pointer;
  }

  #close-icon:hover {
    color: #828588;
  }

  .textInput {
    width: 60%;
    height: 30px;
    margin: 10px;
    border: none;
    border-bottom: 1px solid #ddd;
    font-size: 15px;
  }

  .todoSlider {
    width: 60%;
    margin: 10px;
    text-align: left;
  }

  .todoSlider label {
    color: #616161;
    font-size: 15px;
  }

  .todoSlider input {
    float: right;
    cursor: pointer;
  }

  #submit {
    width: 200px;
    padding: 10px;
    background-color: #daf7ee;
    border-radius: 5px;
    margin: auto  0 10px 0;
  }

  #submit:hover {
    cursor: pointer;
    background-color: #d4f2e9;
  }
</style>