<template>
  <div id="hackLists">
    <tab-component :items="items"
                   :showHistory="false"
                   :showHacksCreate="true"
                   :isMypage="true"
                   @activeTab="getList"
    />
    <v-row>
      <!--title-->
      <v-col cols="12" style="position: relative">
        <h1 class="text-h3 white--text mt-12">해커톤을 <br class="only-mobile">선택하세요</h1>
        <img :src="imgSrc" alt="" class="list_title_img">
      </v-col>
      <v-col cols="12" :md="4"
             v-for="(hack, index) in hackLists" :key="`result-${index}`">

        <router-link :to="`/hacks/${hack.id}`">
          <Card :title="hack.title"
                :subTitle="`현재 ${hack.current_personnel}명 신청`"
                :content="`(팀별 ${hack.team_personnel}명)`"
                :captionText="startDateTime(hack.started_at)"
                :route="`/hacks/${hack.id}`"
                :fee="hack.total_fee"
                buttonText="상세보기"
          />
        </router-link>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="showHacksIngSnackbar"
      timeout="-1"
      light
      class="mx-0"
      v-if="hacksIngList"
    >
      <v-col cols="12" class="pa-0 ma-0" @click="goHacksIngDetail(hacksIngList.id)">
        <v-row class="d-flex align-center justify-space-between">
          <div class="pl-4">
            <div class="grey--text lighten-3">진행중인 해커톤이 있습니다.</div>
            <strong class="black--text">{{ hacksIngList.title }}</strong>
          </div>
          <strong class="text-button font-weight-bold teal--text">이어하기</strong>
        </v-row>
      </v-col>
    </v-snackbar>
  </div>
</template>

<script>
import TabComponent from './TabComponent'
import Card from '../../components/base/main/Card'
import moment from 'moment'

export default {
  name: 'HacksListPage',
  data: () => ({
    hackLists: [],
    items: [], // '모집중', '투표중'
    // title: ['해커톤을<br/>선택하세요', '우승팀을<br>골라주세요'],
    // tabActive: 0,
    showHacksIngSnackbar: true,
    hacksIngList: null
  }),
  computed: {
    imgSrc () {
      // if (this.tabActive === 0) {
      return require('../../assets/images/illust/illust_hacksList.svg')
      // } else {
      //   const randomNum = Math.floor(Math.random() * 3)
      //   return require(`../../assets/images/illust/illust_hackVote_${randomNum + 1}.svg`)
      // }
    }
  },
  created () {
    this.getHacksIngList()
    this.getList()
  },
  methods: {
    goHacksIngDetail (hacksId) {
      this.$router.push(`/hacks/${hacksId}/ing`)
    },
    getList (activeTab) {
      /*
      * activeTab 0 - 모집중
      * activeTab 1 - 투표중
      * */
      this.$http({
        method: 'GET',
        url: '/hacks/'
      }).then(({ data }) => {
        // console.log(data)
        this.hackLists = data.results
        // if (activeTab === undefined) {
        //   this.tabActive = 0
        // } else {
        //   this.tabActive = activeTab
        // }
      })
        .catch(({ error }) => {
          console.log(error)
        })
    },
    gotoDetail (id) {
      this.$router.push(`/hacks/${id}`)
    },
    startDateTime (startDate) {
      return `${moment(startDate).format('YY.MM.DD (ddd)')} 19:00 시작`
    }
  },
  components: {
    TabComponent,
    Card
  }
}
</script>
<style scoped lang="less">
  a {
    &:hover {
      text-decoration: none;
    }
  }
  /deep/.v-sheet.v-snack__wrapper {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    max-width: calc(100% - 24px);
  }
</style>
