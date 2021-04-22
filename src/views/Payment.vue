<template>
  <form @submit.prevent="submitPayment">
    <BaseInput v-model="paymentInformations.name" label="Nom"/>
    <BaseInput v-model="paymentInformations.cardNumber" label="Numéro de carte"/>
    <BaseInput v-model="paymentInformations.expMonth" label="Mois d'expiration"/>
    <BaseInput v-model="paymentInformations.expYear" label="Année d'expiration"/>
    <BaseInput v-model="paymentInformationscardCVC" label="Code CVV"/>
    <BaseButton type="submit">Valider</BaseButton>
  </form>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
import BaseInput from "../components/BaseInput.vue"
export default {
  components: {
    BaseInput,
    BaseButton,
  },
  computed: {
    paymentInformations () {
      return this.$store.payment.paymentInformations
    }
  },
  methods: {
    submitPayment () {
      this.$store.payment.dispatch('ADD_PAYMENT')
    }
  }
}
</script>