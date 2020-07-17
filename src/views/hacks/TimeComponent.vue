<template>
  <div class="text-caption d-flex justify-space-between px-4 mt-5">
    <span>{{leftText}}</span>
    <span>{{rightText}}</span>
  </div>
</template>

<script>
export default {
  name: 'TimeComponent',
  props: ['leftText', 'rightText']
}
</script>

<style scoped>

</style>
