<template>
  <div class="container">
    <form
      id="sign-up-form"
      class="sign-up-container"
      @submit.prevent="submitsignup()"
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
        :error="showErrorMessage"
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
      email: "",
      password: ""
    }
  },
  computed: {
    // showErrorMessage() {
    //   return this.$store.signup.getters.HAS_SIGNUP_ERRORS
    // }
  },
  methods: {
    submitSignup() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.signup.dispatch('SIGNUP', { user })
    }
  }
}
</script>
