<template>
  <div class="container-cards-subscription">
    <CardSubscription
      hrefIcon="#paper-plane"
      typeAbo="Premium"
      price="Gratuit"
      :isButtonDisplayed="true"
    />

    <CardSubscription
      hrefIcon="#plane"
      typeAbo="Premium"
      price="9.99€/mois"
      recommended="Recommandé"
      fonctionnalities="Accès au graph + Interface commandes"
      :isButtonDisplayed="true"
    />

    <CardSubscription
      hrefIcon="#rocket"
      typeAbo="Premium"
      price="19.99€/mois"
      fonctionnalities="Accès au graph + Interface commandes + Livraison"
      :isButtonDisplayed="true"
    />
  </div>
</template>

<script>
import CardSubscription from '../components/CardSubscription.vue'
export default {
  components: {
    CardSubscription
  }
}
</script>
