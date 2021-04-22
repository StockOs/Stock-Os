<template>
  <section class="section">
    <div class="step-payment">
      <p>Stock'Os</p>
      <BaseIcon href="arrow-right" class="icon" />
      <p class="subtitle">Payment</p>
    </div>

    <div class="container-card-and-form">
        <CardSubscription
          hrefIcon="#paper-plane"
          typeAbo="Premium"
          price="Gratuit"
          :isSubscriptionCardClicked="true"
        />
        <form @submit.prevent="submitPayment" class="form-payment">
          <BaseInput v-model="paymentInformations.name" label="Nom" class="input-width-payment"/>
          <BaseInput
            v-model="paymentInformations.cardNumber"
            label="Numéro de carte"
            class="input-width-payment"
          />
          <div class="card-informations">
            <BaseInput
              v-model="paymentInformations.expMonth"
              label="Mois d'expiration"
            />
            <BaseInput
              v-model="paymentInformations.expYear"
              label="Année d'expiration"
            />
            <BaseInput v-model="paymentInformations.cardCVC" label="Code CVV" />
          </div>
          <BaseButton type="submit" class="button-size">Valider</BaseButton>
        </form>
      </div>

    <div class="popup" v-if="isPopUpDisplayed">
      <BaseIcon href="validate" class="popup-icon" />
      <p class="popup-text subtitle">Paiement validé</p>
    </div>
  </section>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import CardSubscription from '../components/CardSubscription.vue'
import BaseIcon from '../components/icons/BaseIcon'

export default {
  components: {
    BaseInput,
    BaseButton,
    CardSubscription,
    BaseIcon
  },
  computed: {
    paymentInformations() {
      return this.$store.payment.state.paymentInformations
    },
    isPopUpDisplayed() {
      return this.$store.payment.state.isPopUpDisplayed
    }
  },
  methods: {
    submitPayment() {
      this.$store.payment.dispatch("ADD_PAYMENT")
    }
  }
}
</script>
