<template>
  <div class="layout background-white">
    <div class="flex-column nav-width menu-content">
      <div class="flex-column">
        <h1 class="title-name">Nom du restaurant</h1>
        <h2 class="subtitle-address">Adresse du restaurant</h2>
      </div>

      <MenuContent />
    </div>

    <section class="main-content">
      <slot />
      <!-- <router-view :to="currentPath" /> -->
    </section>
  </div>
</template>

<script>
import MenuContent from '../components/MENU_CONTENT'
export default {
  components: {
    MenuContent,
  }
}
</script>

<style lang="scss" scoped>

.layout {
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.main-content {
  width: 100%;
  background-color: blue;
}

.nav-width {
  width: 244px;
}
</style>