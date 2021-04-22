<template>
  <form class="form-user" @submit.prevent="submit()">
    <h2 class="uppercase-text">Modifier les Informations <br> de votre compte</h2>
    <BaseInput
      label="Nom de l'entreprise"
      v-model="name"
    />
      <BaseInput
      label="Email de l'entreprise"
      v-model="email"
    />
    <BaseInput
      label="Information bancaire"
      v-model="bankCard"
    />
    <BaseButton type="submit">Valider</BaseButton>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components:{
    BaseInput,
    BaseButton
  },
  mounted(){
    this.$store.userInfo.dispatch('getUser')
  },
  computed: {
    userInfos() {
      return this.$store.userInfo.state.userInfos
    },
    name: {
      get() {
        return this.$store.userInfo.state.userInfos.name
      },
      set(value) {
        console.log(value)
        this.$store.userInfo.commit('UPDATE_NAME', value);
      },
    },
    email: {
      get() {
        return this.$store.userInfo.state.userInfos.email
      },
      set(value) {
        this.$store.userInfo.commit('UPDATE_EMAIL', value);
      },
    },
    bankCard: {
      get() {
        return this.$store.userInfo.state.userInfos.bankCard
      },
      set(value) {
        this.$store.userInfo.commit('UPDATE_BANK_CARD', value);
      },
    },
  },
  methods: {
    submit(){
      this.$store.userInfo.dispatch('updateUser')
    }
  }
}
</script>