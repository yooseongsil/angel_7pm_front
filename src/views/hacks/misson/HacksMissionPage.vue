<template>
  <HacksMissionTeamFormPage v-if="$route.params.id === '1'" />
  <HacksMissionTeamIdeationFormPage v-else-if="$route.params.id === '2'" />
  <HacksMissionTeamSubmissionFormPage v-else-if="$route.params.id === '3'" />
</template>

<script>
import HacksMissionTeamFormPage from './HacksMissionTeamFormPage'
import HacksMissionTeamIdeationFormPage from './HacksMissionTeamIdeationFormPage'
import HacksMissionTeamSubmissionFormPage from './HacksMissionTeamSubmissionFormPage'

export default {
  name: 'HacksMissionPage',
  components: {
    HacksMissionTeamFormPage,
    HacksMissionTeamIdeationFormPage,
    HacksMissionTeamSubmissionFormPage
  }
}
</script>

<style scoped>

</style>
