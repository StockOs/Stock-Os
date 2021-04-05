<template>
  <div class="multiSelect">
    <h3 class="multiSelect-title">{{ placeholder }}</h3>
    <div class="multiSelect-input-container"
      @click.self="isFocused = !isFocused" 
    >
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
          <span><BaseIcon href="cancel" class="cancel-icon"/></span>
        </div>
      </div>
        <BaseIcon 
          href="arrow" 
          class="arrow-icon"
          :class="{'down' : isFocused}"
          @click.self="isFocused = !isFocused" 
          />
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
            :class="{'checked' : option.checked}"
          ><BaseIcon href='check' class="check-icon" :class="{'valid' : option.checked}"/></div>
          {{ option[displayOption] }}
        </div>
      </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/icons/BaseIcon.vue'

export default {
  components:{
    BaseIcon,
  },
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

</style>