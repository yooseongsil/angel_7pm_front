<template>
  <v-app :id="isHacksIngPage ? 'hacksIngPage' : 'hackBasic'">
    <v-main no-gutters>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import '@/assets/css/main.css'

export default {
  name: 'App',
  computed: {
    isHacksIngPage () {
      return this.$route.path.includes('/hacks/') && this.$route.path.includes('/ing')
    }
  }
}
</script>

<style lang="less">
  #hackBasic{
    background: #292929 !important;
  }
  #hacksIngPage {
    background: #212529 !important;
    color: white !important;
  }
  #hacksIngPage div,
  #hacksIngPage p,
  #hacksIngPage span {
    font-family: 'DungGeunMo', 'kongtext' !important;
  }

  .is-dark {
    color: white;
  }
</style>
