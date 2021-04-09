<template>
  <div class="container">
    <form id="login-form" class="login-container" @submit.prevent="submitLogin()">
      <h1 class="title-name">Connectez-vous</h1>

        <BaseInput
          v-model="email"
          label="Email"
          required
          class="margin-top-16"
          :error="showErrorMessage"
        />

        <BaseInput
          v-model="password"
          type="password"
          label="Password"
          required
          class="margin-top-16"
          :error="showErrorMessage"
        />

      <button form="login-form">Connexion</button>
      <a href="#" class="primary-blue">Inscrivez-vous</a>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput"

export default {
  components: {
    BaseInput,
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    showErrorMessage () {
      console.log(this.$store.login.getters.HAS_LOGIN_ERRORS);
      return this.$store.login.getters.HAS_LOGIN_ERRORS
    },
  },
  methods: {
    submitLogin() {
      const user = {
        email : this.email,
        password: this.password
      }
        this.$store.login.dispatch('login', { user })
    }
  }
}
</script>