<template>
  <div class="p-relative">
    <span style="z-index: 1; position: absolute; left: 24px; top: 22px;">
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
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="(item, index) in items"
          :key="`tab-${index}`"
        >
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: 'TabComponent',
  props: ['items'],
  data () {
    return {
      tab: null
    }
  }
}
</script>

<style scoped>

</style>
