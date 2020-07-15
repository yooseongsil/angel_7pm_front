<template>
  <v-app :id="isHacksIngPage ? 'hacksIngPage' : ''">
    <v-main no-gutters class="pa-4">
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
  #hacksIngPage {
    background: #212529 !important;
    color: white !important;
  }
  #hacksIngPage div,
  #hacksIngPage p,
  #hacksIngPage span {
    font-family: 'DungGeunMo', 'kongtext' !important;
  }
</style>
