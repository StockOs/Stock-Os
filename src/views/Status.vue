<template>
  <section class="status">
  <div class="status-logo-container">
    <a href="/" class="status-link">
        <img class="status-logo" src="../assets/img/Logo_stockos.svg" alt="logo">
        <span class="status-text-logo">StockOS</span>
    </a>
  </div>
  <div class="status-title-container">
      <h1 class="status-title">All Systems Operational</h1>
  </div>
  <div class="status-state-container">
      <div class="state-position">
        <h2 class="status-subtitle-state">Etat de service durant les 30 derniers jours</h2>
        <BaseState>Api</BaseState>
        <BaseState>Stripe.js</BaseState>
        <BaseState>Firebase</BaseState>
      </div>
  </div>
  <div class="status-footer">
      <div class="status-explain-container"> 
        <div class="status-state-explain"><div class="circle-state-footer functionnal"></div><span>100% functionnal</span></div>
        <div class="status-state-explain"><div class="circle-state-footer degradation"></div><span>partial degradation</span></div>
        <div class="status-state-explain"><div class="circle-state-footer down"></div><span>downtime</span></div>
      </div>
  </div>
  </section>
</template>

<script>
 import BaseState from '@/components/BaseState'
export default {
 components: {
     BaseState,
 }
}
</script>

<style>

</style>