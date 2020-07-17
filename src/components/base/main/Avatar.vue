<template>
  <v-avatar color="#bb86fc">
    <span class="black--text headline">{{avatarText}}</span>
  </v-avatar>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['email'],
  computed: {
    avatarText () {
      return this.email.substr(0, 1)
    }
  }
}
</script>

<style scoped>

</style>
