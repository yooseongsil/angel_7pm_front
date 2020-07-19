<template>
  <div id="hackLists">
    <v-row>
      <v-col cols="12">
        <tab-component :items="items" :iconShow="false" :isMypage="true" @activeTab="getList" />
      </v-col>
      <!--title-->
      <v-col cols="12" style="position: relative">
        <h1 class="text-h3 white--text mt-12">해커톤을 <br class="only-mobile">선택하세요</h1>
        <img :src="imgSrc" alt="" class="list_title_img">
      </v-col>
      <v-col cols="12" :md="4"
             v-for="(hack, index) in hackLists" :key="`result-${index}`">

        <router-link :to="`/hacks/${hack.id}`">
          <Card :title="hack.title"
                :subTitle="`현재 ${hack.awards_count}명 신청`"
                :content="`(팀별 ${hack.team_personnel}명)`"
                :captionText="startDateTime(hack.started_at)"
                :route="`/hacks/${hack.id}`"
                buttonText="상세보기"
          />
        </router-link>
      </v-col>
    </v-row>
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
    items: [] // '모집중', '투표중'
    // title: ['해커톤을<br/>선택하세요', '우승팀을<br>골라주세요'],
    // tabActive: 0
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
  methods: {
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
      return `${moment(startDate).format('YY년 M월 DD일')} 오후 7시 시작`
    }
  },
  created () {
    this.getList()
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
</style>
