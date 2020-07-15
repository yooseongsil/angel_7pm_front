<template>
  <section>
    <!-- coin -->
    <i class="nes-icon coin is-small"></i>
    <span class="nes-text is-warning">{{missionTitle}}</span>
    <div>{{mission}}</div>
    <div>{{missionShort}}</div>
    <div>{{missionTimeLeft}}</div>
    <a :href="missionQuestionLink">
      <div class="nes-text is-warning" style="text-decoration: underline;">{{missionQuestion}}</div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'MissionComponent',
  props: ['missionTitle', 'mission', 'missionShort', 'missionTimeLeft', 'missionQuestion', 'missionQuestionLink']
}
</script>

<style scoped>

</style>
