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
      <!-- <router-view :to="newPath" /> -->
    </section>
  </div>
</template>

<script>
import MenuContent from '../components/MENU_CONTENT'
export default {
  components: {
    MenuContent,
  },
}
</script>

<style lang="scss" scoped>

.layout {
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: var(--background-light-blue);
}

.main-content {
  width: 100%;
}

.nav-width {
  width: 244px;
}
</style>