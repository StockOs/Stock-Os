<template>
  <div
    class="subscription-container"
    :class="{ 'subscription-container-click': isSubscriptionCardClicked }"
  >
    <p>{{ recommended }}</p>
    <span class="illustration-container">
      <div class="circle">
        <BaseIcon :href="hrefIcon" class="illustration" />
      </div>
    </span>
    <p class="type">Premium</p>
    <p>{{ price }}</p>
    <p class="subcription-fonctionnalities">{{ fonctionnalities }}</p>
    <BaseButton @click="redirectionToPaymentPage" v-if="isButtonDisplayed">
      PAYER
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import BaseIcon from "../components/icons/BaseIcon.vue";

export default {
  components: {
    BaseButton,
    BaseIcon
  },
  props: {
    hrefIcon: {
      type: String,
      default: ""
    },
    recommended: {
      type: String,
      default: ""
    },
    typeAbo: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    fonctionnalities: {
      type: String,
      default: ""
    },
    isButtonDisplayed: {
      type: Boolean,
      default: false
    },
    isSubscriptionCardClicked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    redirectionToPaymentPage() {
      this.$router.push("/payment");
    },
  },
}
</script>
