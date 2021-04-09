<template>
  <div class="container">
    <form
      id="sign-up-form"
      class="sign-up-container"
      @submit.prevent="submitSignup()"
    >
      <h1 class="title-name">Inscrivez-vous</h1>

      <BaseInput
        v-model="companyName"
        label="Nom de l'entreprise"
        required
        class="margin-top-16"
        :error="showErrorMessage"
      />

      <BaseInput
        v-model="email"
        label="Email"
        required
        class="margin-top-16"
        :error="showEmailErrorMessage"
      />

      <PasswordInput
        v-model="password"
        label="Password"
        required
        class="margin-top-16"
        :error="showErrorMessage"
      />

      <div v-if="showErrorMessage" class="error-message">
        <p>
          Il y a une erreur.
        </p>
      </div>

      <button form="sign-up-form">Inscrivez-vous</button>
      <p>Vous avez déjà un compte ?</p>
      <a href="/login" class="primary-blue">Connectez-vous</a>
    </form>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput'
import PasswordInput from '../components/PasswordInput'

export default {
  name: 'SignUp',
  components: {
    BaseInput,
    PasswordInput
  },
  data() {
    return {
      companyName: '',
      email: "",
      password: ""
    }
  },
  computed: {
    showErrorMessage() {
      console.log(this.$store.signUp.getters.HAS_SIGNUP_ERRORS, 'fshjsj')
      return this.$store.signUp.getters.HAS_SIGNUP_ERRORS
    },
    showEmailErrorMessage() {
      console.log(this.$store.signUp.getters. HAS_SIGN_UP_EMAIL_ERRORS, 'fshjsj')
      return this.$store.signUp.getters. HAS_SIGN_UP_EMAIL_ERRORS
    }
  },
  methods: {
    submitSignup() {
      const user = {
      //  companyName: this.companyName,
        email: this.email,
        password: this.password
      }
      this.$store.signUp.dispatch('SIGN_UP', { user })
    }
  }
}
</script>
