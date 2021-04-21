<template>
  <section>
    <div class="section-account">
      <div 
        class="account"
      >
        <h1 class="subtitle">Mon compte</h1>
        <hr>
        <div class="account-subscribe-section">
          <h2 class="uppercase-text h2-title">ABONNEMENT ET <br> FACTURATION</h2>
          <div class="account-subscribe-info">
            <div class="account-subscribe-section-firm-name">
              <div>
                <h3 class="h3-title">Nom de l'entreprise:</h3>
                <h4 class="h4-title">{{ users.name }}</h4>
              </div>
              <a 
                @click="editUser(users.id)"
                target="blank"
                >modifier
              </a>
            </div>
            <div class="account-subscribe-section-firm-mail">
              <div>
                <h3 class="h3-title">Email de l'entreprise:</h3>
                <h4 class="h4-title">{{ users.email }}</h4>
              </div>
              <a 
                @click="editUser(users.id)"
                target="blank"
                >modifier
              </a>
            </div>
            <div class="account-subscribe-section-bankInfo">
              <div>
                <h3 class="h3-title">Information bancaire:</h3>
                <h4 class="h4-title">{{ users.bankCard }}</h4>
              </div>
              <a
                @click="editUser(users.id)"
                target="blank"
                >modifier
              </a>
            </div>
          </div>
        </div>
        <br>
        <hr>
        <div class="account-forfait-section">
          <h2 class="uppercase-text">DETAILS DU FORFAIT</h2>
          <div class="account-forfait-section-info">
            <h3 class="h4-title">{{ users.subscribtion }}</h3>
            <a href="#">Changer de forfait</a>
          </div>
        </div>
        <br>
        <hr>
        <div class="account-actions-section">
          <h2 class="uppercase-text action-title">ACTIONS DU COMPTE</h2>
          <div class="button-placement-section-action">
            <BaseButton>Annuler l'abonnement</BaseButton>
            <BaseButton class="button-delete">Supprimer son compte</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
  components: {
   BaseButton,
  },
  mounted(){
    this.$store.userInfo.dispatch('getUser')
  },
  computed:{
    users(){
      return this.$store.userInfo.getters.displayUser
    }
  },

  methods: {
    editUser(id){
      open(this.$router.resolve({name: "user", params: { userId: id },}).href, "_blank");
    },
  }
}
</script>