<template>
  <nav class="menu-content">
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
    <button class="primary-blue margin-top-16 regular-subtitle-14 item-blue" @click="test">
      <BaseIcon class="icon-blue margin-right-16" href="#logout" alt="logout icon" aria-hidden="true" />
      Se déconnecter
    </button>
  </nav>
</template>

<script>
import MenuItem from './MENU_ITEM.vue'
import BaseIcon from './icons/BaseIcon'

export default {
  components: { MenuItem, BaseIcon, },
  computed: {
    menuItems () {
      return console.log(this.$store)
      // return this.$store.getters.getMenuItemsForRoute
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
test() {
  console.log(this.$store)
}
  },
}
</script>
