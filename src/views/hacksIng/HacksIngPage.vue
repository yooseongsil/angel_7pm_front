<template>
  <div>
    <HacksIngApplicantPage v-if="userType === 1"  />
    <HacksIngHostPage v-else />
  </div>
</template>

<script>
import HacksIngApplicantPage from './HacksIngApplicantPage'
import HacksIngHostPage from './HacksIngHostPage'
export default {
  name: 'HacksIngPage',
  data: () => ({
    userType: 1
  }),
  components: { HacksIngHostPage, HacksIngApplicantPage }
}
</script>
