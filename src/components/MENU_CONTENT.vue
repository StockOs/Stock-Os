<template>
  <nav class="test">
    <ul role="menu">
      <li role="none" v-for="item in menuItems" :key="item.name" class="a">
        <MenuItem
          :name="item.name"
          :selected="item.selected"
          :linkIconSvg="`#${item.icon}`"
          iconDescription="list icon"
          @click="() => changePage(item.path)"
        />
      </li>
    </ul>

    <div>

        <MenuItem
          name="Paramètres"
          linkIconSvg="settings"
          iconDescription="Paramètres"
          @click="() => changePage('/settings')"
        />

      <button class="primary-blue" @click="logout">
        Se déconnecter
      </button>
    </div>
  </nav>
</template>

<script>
import MenuItem from "./MENU_ITEM.vue";

export default {
  components: {
    MenuItem
  },
  computed: {
    menuItems() {
      return this.$store.mainLayout.getters.getMenuItemsForRoute;
    }
  },
  methods: {
    changePage(path) {
      return this.$store.mainLayout.commit("changePath", path);
    },
    logout() {
      return this.$store.dispatch("mainLayout/logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
