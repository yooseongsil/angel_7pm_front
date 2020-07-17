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
              :route="`/hacks/${hack.id}`"
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
    items: ['모집중', '투표중'],
    title: ['해커톤을<br/>선택하세요', '우승팀을<br>골라주세요'],
    tabActive: 0
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
        if (activeTab === undefined) {
          this.tabActive = 0
        } else {
          this.tabActive = activeTab
        }
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
  },

  components: {
    TabComponent,
    Card
  }
}
</script>
