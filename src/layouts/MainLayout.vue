<template>
  <div class="layout background-white">
    <div class="flex-column nav-width">
      <div class="flex-column">
        <h1>Nom du restaurant</h1>
        <h2>Adresse du restaurant</h2>
      </div>

      <div class="flex-column">
        <nav>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>
      </div>

      <MenuContent />

      <!-- <div class="flex-column">
        <p>Paramètres</p>
        <button>Se déconnecter</button>
      </div> -->
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