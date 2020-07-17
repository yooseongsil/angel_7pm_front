<template>
  <div style="margin: -15px; position: relative">
    <span v-if="iconShow" style="z-index: 1; position: absolute; left: 12px; top: 50%; transform: translateY(-50%)"
          @click="$router.go(-1)">
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
    <span v-if="isMypage" class="mypage_icon">
        <router-link :to="{name: 'Mypage'}">
          <Avatar :email="userInfo.id" class="mb-2"/>
        </router-link>
    </span>
  </div>
</template>

<script>
import Avatar from '../../components/base/main/Avatar'

export default {
  name: 'TabComponent',
  props: ['items', 'iconShow', 'isMypage'],
  data () {
    return {
      tab: null,
      userInfo: {
        id: null,
        belong: null,
        role: null
      }
    }
  },
  components: {
    Avatar
  },
  created () {
    this.userInfo.id = localStorage.getItem('userId')
    this.userInfo.belong = localStorage.getItem('userBelong')
    this.userInfo.role = localStorage.getItem('userRole')
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

<style scoped lang="less">
  .mypage_icon {
    position: absolute;
    right: 16px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;

    div {
      width: 100% !important;
      height: 100% !important;
      border-radius: 100%;
      min-width: 100% !important;
    }

  }
</style>
