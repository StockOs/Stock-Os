<template>
  <div class="state">
      <h3 class="state-title"><slot/></h3>
      <div class="container-circle-state">
          <div  v-for="(n, index) in 30" v-bind:key="n" class="circle-state" :class="`circle-${index}`">
          <span class="hover-degradation">Degraded for 1h 18m<br/>mardi 23 avril 2021</span>
          <span class="hover-down">Down for maintenance<br/>mardi 5 avril 2021</span>
          </div>
      </div>
  </div>
</template>

<script>
 
export default {

}
</script>

<style>

</style>