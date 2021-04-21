<template>
  <div class="layout background-white">
    <div class="flex-column nav-width menu-content">
      <div class="header flex-column">
        <h1 class="title-name">{{ users.name }}</h1>
      </div>

      <MenuContent />
    </div>

    <section class="main-content">
      <slot />
    </section>
  </div>
</template>

<script>
import MenuContent from '../components/MENU_CONTENT'
export default {
  components: {
    MenuContent,
  },
  mounted(){
    this.$store.userInfo.dispatch('getUser')
  },
  computed:{
    users(){
      return this.$store.userInfo.getters.displayUser
    }
  },
}
</script>
