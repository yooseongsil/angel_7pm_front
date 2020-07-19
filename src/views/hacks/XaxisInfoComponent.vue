<template>
  <div class="mt-5 d-flex justify-space-between" style="margin-bottom: 40px">
    <v-row>
      <v-col cols="6" class="pr-6">
        <div class="caption grey--text text--lighten-1">{{leftTitle}}</div>
        <div class="text-subtitle-1">{{leftInfo}}</div>
        <v-divider class="mt-4" />
      </v-col>

      <v-col cols="6" class="pl-6">
        <div class="caption grey--text text--lighten-1">{{rightTitle}}</div>
        <div class="text-subtitle-1">{{rightInfo}}</div>
        <v-divider class="mt-4" />
      </v-col>
    </v-row>
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
