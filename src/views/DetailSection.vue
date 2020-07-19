<template>
  <section style="margin-bottom: 80px;">
    <div class="text-h5 mb-2">
      {{title}}
    </div>
    <div class="text-body-2 grey--text text--lighten-1">
      {{description}}
    </div>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'DetailSection',
  props: ['title', 'description']
}
</script>

<style scoped>

</style>
