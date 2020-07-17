<template>
  <div style="margin: -15px; position: relative">
    <span v-if="iconShow" style="z-index: 1; position: absolute; left: 12px; top: 50%; transform: translateY(-50%)" @click="$router.go(-1)">
      <v-icon>mdi-chevron-left</v-icon>
    </span>
      <v-tabs
        v-model="tab"
        color="deep-purple"
        centered
      >
        <v-tab
          v-for="(item, index) in items"
          :key="`${item}-${index}`"
          @click="clickTab(index)"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabComponent',
  props: ['items', 'iconShow'],
  data () {
    return {
      tab: null
    }
  },
  methods: {
    clickTab (val) {
      this.$emit('activeTab', val)
    },
    gotoList () {
      this.$router.push('/hacks/list')
    }
  }
}
</script>

<style scoped>

</style>
