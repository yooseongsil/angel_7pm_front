<template>
  <section>
    <div class="d-flex flex-row align-center">
      <i class="nes-icon coin is-small"></i>
      <span class="nes-text is-warning">{{missionTitle}}</span>
    </div>
    <div class="mb-4">{{mission}}</div>
    <div>{{missionShort}}까지 남은 시간:</div>
    <div>{{missionTimeLeft}}</div>
    <div class="nes-text is-warning mt-4 mb-6" style="text-decoration: underline;">{{missionQuestion}}</div>
  </section>
</template>

<script>
export default {
  name: 'MissionComponent',
  props: ['missionTitle', 'mission', 'missionShort', 'missionTimeLeft', 'missionQuestion', 'missionQuestionLink']
}
</script>

<style lang="less" scoped>
</style>
