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
      />

      <BaseInput
        v-model="email"
        label="Email"
        required
        class="margin-top-16"
        :error="showErrorMessageBoolean"
      />

      <PasswordInput
        v-model="password"
        label="Password"
        required
        class="margin-top-16"
        :error="showErrorMessageBoolean"
      />

      <div v-if="showErrorMessage" class="error-message">
        <p>
          {{ showErrorMessage }}
        </p>
      </div>
      <div>
        <BaseButton form="sign-up-form">Inscription</BaseButton>
      </div>
      <p>Vous avez déjà un compte ?</p>
      <a href="/login" class="primary-blue">Connectez-vous</a>
    </form>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput'
import PasswordInput from '../components/PasswordInput'
import BaseButton from '../components/BaseButton'

export default {
  name: 'SignUp',
  components: {
    BaseInput,
    PasswordInput,
    BaseButton,
  },
  data() {
    return {
      companyName: '',
      email: '',
      password: '',
    }
  },
  computed: {
    showErrorMessage() {
      return this.$store.signUp.getters.hasSignUpErrors.message
        ? this.$store.signUp.getters.hasSignUpErrorsMessage
        : ''
    },
    showErrorMessageBoolean() {
      return this.$store.signUp.getters.hasSignUpErrors.message ? true : false
    }
  },
  methods: {
    submitSignup() {
      const user = {
       companyName: this.companyName,
        email: this.email,
        password: this.password
      }
      this.$store.signUp.dispatch('SIGN_UP', { user })
    }
  }
}
</script>
