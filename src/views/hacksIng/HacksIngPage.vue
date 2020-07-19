<template>
  <HacksSwitchingPage v-if="!isLoaded" />
  <div v-else-if="isLoaded && hacksIngList && userInfo">
    <HacksIngHostPage v-if="isHost" />
    <HacksIngApplicantPage v-else />
  </div>
</template>

<script>
import HacksIngApplicantPage from './HacksIngApplicantPage'
import HacksIngHostPage from './HacksIngHostPage'
import HacksSwitchingPage from './HacksSwitchingPage'
export default {
  name: 'HacksIngPage',
  data: () => ({
    userInfo: null,
    isLoaded: false
  }),
  computed: {
    getUserInfo () {
      return this.$store.getters.getUserInfo
    },
    isHost () {
      // return true
      return this.hacksIngList.email === this.userInfo.email
    }
  },
  async created () {
    this.userInfo = await this.getUserInfo

    if (!this.isLoaded) {
      setTimeout(() => {
        this.isLoaded = true
      }, 2000)
    }
  },
  components: { HacksSwitchingPage, HacksIngHostPage, HacksIngApplicantPage }
}
</script>
