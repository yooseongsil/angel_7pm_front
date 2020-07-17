<template>
  <div class="mt-5 d-flex justify-space-between" style="margin-bottom: 40px">
    <div>
      <div class="text-body-2 grey--text text--lighten-1">{{leftTitle}}</div>
      <div class="text-subtitle-1">{{leftInfo}}</div>
    </div>
    <div>
      <div class="text-body-2 grey--text text--lighten-1">{{rightTitle}}</div>
      <div class="text-subtitle-1">{{rightInfo}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XaxisInfoComponent',
  props: ['leftTitle', 'leftInfo', 'rightTitle', 'rightInfo']
}
</script>

<style scoped>

</style>
