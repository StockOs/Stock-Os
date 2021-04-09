<template>
  <div class="container">
    <form
      id="login-form"
      class="login-container"
      @submit.prevent="submitLogin()"
    >
      <h1 class="title-name">Connectez-vous</h1>

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
          Nous n'avons pas trouvé de compte correspondant. Veuillez vérifier
          votre e-mail et votre mot de passe et réessayer.
        </p>
      </div>

      <button form="login-form">Connexion</button>
      <a href="#" class="primary-blue">Inscrivez-vous</a>
    </form>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput'
import PasswordInput from '../components/PasswordInput'

export default {
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
    showErrorMessage() {
      return this.$store.login.getters.HAS_LOGIN_ERRORS
    }
  },
  methods: {
    submitLogin() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.login.dispatch('LOGIN', { user })
    }
  }
}
</script>