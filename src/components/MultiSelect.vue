<template>
  <div class="multiSelect">
    <h3>{{ placeholder }}</h3>
    <div class="multiSelect-input" 
      @click.self="isFocused = !isFocused"
    >
      <div
        class="multiSelect-input-data"
        v-for="(option, i) in formattedData"
        :key="i"
        v-show="option.checked"
        @click="handleOptions(i)"
      >
        {{ option[displayOption] }}
        <span>x</span>
      </div>
    </div>
    <div class="multiSelect-dropdown" v-if="isFocused">
        <div 
          class="multiSelect-option"
          v-for="(option, i) in formattedData"
          :key="i"
          @click="handleOptions(i)"
          >
          <div 
            class="multiSelect-option-checked"
            :class="{'color' : option.checked}"
          ></div>
          {{ option[displayOption] }}
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
    handleOptions(index){
      let addValue = this.options[index][this.valueOption]
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
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .multiSelect-input {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    padding: 8px;
    border-bottom: 2px solid grey;
    width: 100%;
  }

  .multiSelect-input:hover{
    background-color: rgb(240, 247, 255);
  }

  .multiSelect-input-data {
    padding: 0.4rem;
    background-color: #4285F4;
    border-radius: 16px;
    color: white;
    margin: 0 5px 5px; 
  }

  .multiSelect-dropdown {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  // .multiSelect-option-container{
  //   width: 100%;
  //   overflow-Y: scroll;
  //   padding: 8px;
  // }

  .multiSelect-option {
    display: flex;
    cursor: pointer;
    padding: 8px;
    text-align: start;
    width: 100%;
    height: 100%;
    background-color: rgb(240, 247, 255);
  }

  .multiSelect-option:hover {
    background-color: rgb(184, 224, 247);
  }

  .multiSelect-option-checked {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  .color {
    background: #4285F4;
    border-radius: 4px;
  }
</style>