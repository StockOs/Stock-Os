<template>
  <nav>
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

    <hr class="margin-top-16">
    <button class="primary-blue margin-top-16 regular-subtitle-14 item-blue" @click="logout">
      Se déconnecter
    </button>
  </nav>
</template>

<script>
import MenuItem from './MENU_ITEM.vue'

export default {
  components: { MenuItem },
  computed: {
    menuItems () {
       console.log(this.$store.mainLayout.getters.getMenuItemsForRoute)
      return this.$store.mainLayout.getters.getMenuItemsForRoute
      //(this.$route)
    },
  },
  methods: {
    changePage (path) {
      return this.$store.dispatch('mainLayout/changeCurrentPage', path)
    },
    logout () {
      return this.$store.dispatch('mainLayout/logout')
    },
  },
}
</script>
