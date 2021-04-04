<template>
  <div class="multiSelect">
    <div class="multiSelect-input" 
      @click.self="isFocused = !isFocused"
    >
      <p
        class="multiSelect-input-data"
        v-for="(option, i) in formattedData"
        :key="i"
        v-show="option.checked"
        @click="handleOptions(i)"
      >
        {{ option[displayOption] }}
      </p>
    </div>
    <div class="multiSelect-dropdown" v-if="isFocused">
      <div class="multiSelect-option-container">
        <div 
          class="multiSelect-option"
          :class="{'color' : option.checked}"
          v-for="(option, i) in formattedData"
          :key="i"
          @click="handleOptions(i)"
          >
          {{ option[displayOption] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    options: {
      type: Array,
      default: () => []
    },
    value:{
      default: () => []
    },
    placeholder: {
      type: String,
      default: "Select one",
    },
    displayOption: {
      type: String,
      default: "name",
    },
    valueOption: {
      type: [String, Number],
      default: "value"
    }
  },
  data:() => ({
    isFocused: false,
  }),
  computed: {
    formattedData(){
      let selectOption = this.options.map(option => {
      let checked =  this.value.some(val => val === option[this.valueOption])
        return {...option, checked: checked};
      });

      return selectOption
    }
  },

  methods: {
    handleOptions(i){
      let addValue = this.options[i][this.valueOption]
      let newValue = [...this.value]
      let findIndexOption = this.value.findIndex(val => val === addValue)

      if(findIndexOption === -1){
        newValue.push(addValue);
      }else{
        newValue.splice(findIndexOption, 1);
      }

      this.$emit('input', newValue)
    },
  }
}
</script>

<style lang="scss">
  .multiSelect {
    width: 240px;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .multiSelect-input {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    background: rgb(202, 202, 202);
    padding: 8px;
  }

  .multiSelect-input-data {
    width: 4rem;
    padding: 0.4rem;
    background-color: white;
    margin: 0 5px 5px; 
  }

  .multiSelect-dropdown {
    height: 200px;
    margin-top: 10px;
    background: rgb(202, 202, 202);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }

  .multiSelect-option-container{
    width: 90%;
    overflow-Y: scroll;
    padding: 8px;
  }

  .multiSelect-option {
    cursor: pointer;
    padding: 8px;
    background-color: white;
    margin-bottom: 8px;
    width: auto;
    text-align: start;
  }

  .color {
    color: red;
  }
</style>