<template>
  <div class="cardMoneySaved background-white">
    <h1 class="card-title">Argent économisé ({{ timeUnit }})</h1>
    <p class="card-text text-padding-top">{{ moneySaved }} €</p>
  </div>
</template>

<script>
export default {
  props: {
    moneySaved: {
      type: Number,
    },
    timeUnit: {
      type: String,
      default: '',
    }
  }
}
</script>
