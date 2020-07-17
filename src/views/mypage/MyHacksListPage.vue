<template>
  <div id="hackLists">
    <section>
      <tab-component :iconShow="true" :isMypage="false"></tab-component>
    </section>
    <v-row class="mt-4">
      <template v-if="hackLists.length > 0">
        <v-col cols="12"
               :md="4"
               v-for="(hack, index) in hackLists"
               :key="`result-${index}`"
        >
          <Card :title="hack.results.title"
                :subTitle="`현재 ${hack.results.current_personnel}명 신청`"
                :content="`(팀별 ${hack.results.team_personnel}명)`"
                :captionText="`${hack.results.started_at} 19:00 시작`"
                :route="`/hacks/${hack.results.id}/detail`"
                buttonText="상세보기"
          />
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import TabComponent from '../hacks/TabComponent'
import Card from '../../components/base/main/Card'

export default {
  name: 'MyHacksListPage',
  data: () => ({
    hackLists: [],
    tab: null,
    items: ['작성중', '모집중', '진행중', '진행 완료']
  }),
  components: {
    Card,
    'tab-component': TabComponent
  },
  methods: {
    getList () {
      axios({
        method: 'GET',
        url: `${this.$store.state.host}/hacks/`
      }).then(({ data }) => {
        console.log(data)
        this.count = data.count
        this.hackLists = data.results
      })
        .catch(({ error }) => {
          console.log(error)
        })
    },
    gotoDetail (id) {
      window.location.href = '/hacks/' + id
    }
  },
  created () {
  }
}
</script>
