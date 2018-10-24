<template>
  <div>
    <div>
      <input type="text" v-model="inputValue">
      <button @click="handleSumit">sumit</button>
    </div>
    <ul>
      <todo-item  v-for="(item, index) in List" :key="index"  :index="index"
      :content="item" @delete="handleDelete" >
      </todo-item>

    </ul>
  </div>
</template>

<script>
  import TodoItem from './components/TodoItem'
  export default {
    components: {
      'todo-item': TodoItem
    },
    //es6 data(){return{ }}
    data: function () {
      return {
        inputValue: '',
        List: [],
      }
    },
    methods: {
      handleSumit() {
        this.List.push(this.inputValue),
          this.inputValue = ''
      },
      handleDelete(index){
        this.List.splice(index,1)

      }

    }
  }

</script>

<style>


</style>
