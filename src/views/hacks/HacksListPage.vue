<template>
  <div id="hackLists">
    <v-row>
      <v-col cols="12">
        <tab-component :items="items" :iconShow="false"
        @activeTab="getList"></tab-component>
      </v-col>
      <!--title-->
      <v-col cols="12">
        <h1 class="text-h3 white--text mt-12" v-html="title[tabActive]"></h1>
        <img src="" alt="">
      </v-col>
      <v-col cols="12" :md="4"
             v-for="(hack, index) in hackLists" :key="`result-${index}`">

        <Card :title="hack.title"
              :subTitle="`현재 ${hack.awards_count}명 신청`"
              :content="`(팀별 ${hack.team_personnel}명)`"
              :captionText="`${hack.started_at} 19:00 시작`"
              :route="`/hacks/${hack.id}/detail`"
              buttonText="상세보기"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import TabComponent from './TabComponent'
import Card from '../../components/base/Card'
export default {
  name: 'HacksListPage',
  data: () => ({
    hackLists: [],
    tabActive: 0,
    items: ['모집중', '투표중'],
    title: ['해커톤을<br/>선택하세요', '우승팀을<br>골라주세요']
  }),
  methods: {
    getList (activeTab) {
      /*
      * activeTab 0 - 모집중
      * activeTab 1 - 투표중
      * */
      axios({
        method: 'GET',
        url: `${this.$store.state.host}/hacks/`
      }).then(({ data }) => {
        console.log(data)
        this.hackLists = data.results
        this.tabActive = activeTab
      })
        .catch(({ error }) => {
          console.log(error)
        })
    },
    gotoDetail (id) {
      this.$router.push(`/hacks/${id}`)
    }
  },
  created () {
    this.getList()
    this.hackLists = [{
      count: 0,
      next: 'test0',
      previous: 'test0',
      results: {
        id: 0,
        title: 'test0',
        intro: 'test0 intro',
        subject: 'test0 subject',
        rule: 'test0',
        img: 'test0',
        fee: 'test0',
        status: 'test0',
        Enum: [0, 1, 2, 3],
        ended_at: '2020.20.20',
        judge_line: '2020.220220',
        judge_day: 20,
        max_personnel: 201,
        team_personnel: 5,
        awards_count: 202,
        awards: 'test000',
        started_at: '2020.20.20',
        created_at: '2020.20.20',
        updated_at: '2020.200.200',
        chat_url: 'test0.test.test'
      }
    }]
  },
  components: {
    TabComponent,
    Card
  }
}
</script>
