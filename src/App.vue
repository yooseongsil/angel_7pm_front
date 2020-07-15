<template>
  <v-app>
    <v-main no-gutters class="pa-4" :class="{ 'bg_black': isHacksIngPage }">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import '@/assets/css/main.css'

export default {
  name: 'App',
  computed: {
    isHacksIngPage () {
      return this.$route.path.includes('/hacks/ing')
    }
  }
}
</script>

<style lang="css">
  .bg_black {
    background: #212529;
  }
</style>
