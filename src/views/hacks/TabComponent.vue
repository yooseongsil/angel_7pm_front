<template>
  <div style="margin: -15px;position: relative">
    <span
      v-if="showHistory"
      style="z-index: 1; position: absolute; left: 12px; top: 50%; transform: translateY(-50%)"
      @click="$router.go(-1)"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </span>
    <span
      v-if="showHacksCreate"
      style="z-index: 1; position: absolute; left: 0; top: 50%; transform: translateY(-50%)"
      class="ml-4"
    >
      <router-link :to="{ name: 'HacksCreatePage' }">
         <v-icon class="deep-purple--text accent-1">mdi-plus</v-icon>
      </router-link>
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
          <Avatar :email="userInfo.name" class="mb-2" v-if="userInfo.name" />
        </router-link>
    </span>
  </div>
</template>

<script>
import Avatar from '../../components/base/main/Avatar'

export default {
  name: 'TabComponent',
  props: {
    items: {
      type: [Array, String]
    },
    showHistory: {
      type: Boolean,
      default: false
    },
    isMypage: {
      type: Boolean,
      default: false
    },
    showHacksCreate: {
      type: [Boolean, undefined],
      default: false
    }
  },
  data () {
    return {
      tab: null
    }
  },
  computed: {
    userInfo () {
      return this.$store.getters.getUserInfo
    }
  },
  components: {
    Avatar
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

  a:hover {
    text-decoration: none;
  }
</style>
