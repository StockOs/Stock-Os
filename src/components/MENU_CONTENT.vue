<template>
  <nav class="menu-nav">
    <ul role="menu">
      <li role="none" v-for="item in menuItems" :key="item.name">
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
        :selected="false"
        linkIconSvg="#settings"
        iconDescription="Paramètres"
        @click="() => changePage('/settings')"
      />
      <BaseButton class="primary-blue" @click="logout">Se déconnecter</BaseButton>
    </div>
  </nav>
</template>

<script>
import MenuItem from "./MENU_ITEM.vue"
import BaseButton from './BaseButton'

export default {
  components: {
    MenuItem,
    BaseButton
  },
  computed: {
    menuItems() {
      return this.$store.mainLayout.getters.GET_MENU_ITEMS_FOR_ROUTE
    }
  },
  methods: {
    changePage(path) {
      return this.$store.mainLayout.commit('CHANGE_PATH', path)
    },
    logout() {
      return this.$store.mainLayout.dispatch('LOGOUT')
    }
  }
}
</script>
