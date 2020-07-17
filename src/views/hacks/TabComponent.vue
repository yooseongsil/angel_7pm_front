<template>
  <div style="margin: -15px; position: relative">
    <span style="z-index: 1; position: absolute; left: 12px; top: 50%; transform: translateY(-50%)">
      <!--onclick="document.getElementsByClassName('v-slide-group__content').style.transform='translate(0)'"-->
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

    <!--items 안에 content는거 같아서, 일단 주석처리-->
<!--      <v-tabs-items v-model="tab">-->
<!--        <v-tab-item-->
<!--          v-for="(item, index) in items"-->
<!--          :key="`tab-${index}`"-->
<!--        >-->
<!--          <v-card flat>-->
<!--            <v-card-text>{{ item.content }}</v-card-text>-->
<!--          </v-card>-->
<!--        </v-tab-item>-->
<!--      </v-tabs-items>-->
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
