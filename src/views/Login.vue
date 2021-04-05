<template>
  <div class="container">
    <form id="login-form" class="login-container" @submit.prevent="submitLogin">
      <h1>Connectez-vous</h1>
      <div>
        <BaseInput
          v-model="email"
          label="text input"
          placeholder="Email"
          required
          class="margin-top-16"
          :error="showErrorMessage"
        />
      </div>
      <div>
        <PasswordInput
          v-model="password"
          idForLabel="password input"
          placeholder="Password"
          required
          class="margin-top-16"
          :error="showErrorMessage"
        />
      </div>
      <button>Connexion</button>
      <p>Inscrivez-vous</p>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput"
import PasswordInput from "../components/PasswordInput"

export default {
  components: {
    BaseInput,
    PasswordInput,
  }
}
</script>