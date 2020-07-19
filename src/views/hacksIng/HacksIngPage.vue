<template>
  <div v-if="hacksIngList && userInfo">
    <HacksIngHostPage v-if="isHost" />
    <HacksIngApplicantPage v-else />
  </div>
</template>

<script>
import HacksIngApplicantPage from './HacksIngApplicantPage'
import HacksIngHostPage from './HacksIngHostPage'
export default {
  name: 'HacksIngPage',
  data: () => ({
    userInfo: null
  }),
  computed: {
    getUserInfo () {
      return this.$store.getters.getUserInfo
    },
    isHost () {
      return this.hacksIngList.email === this.userInfo.email
    }
  },
  async created () {
    this.userInfo = await this.getUserInfo
  },
  components: { HacksIngHostPage, HacksIngApplicantPage }
}
</script>
