<template>
  <div id="hackLists">
    <section>
      <tab-component :showHistory="true" :isMypage="false"></tab-component>
    </section>
    <v-row class="mt-4">
      <template v-if="hackLists.length > 0">
        <v-col cols="12"
               :md="4"
               v-for="(hack, index) in hackLists"
               :key="`result-${index}`"
        >
          <router-link :to="`/hacks/${hack.id}`">
            <Card :title="hack.title"
                  :subTitle="`현재 ${hack.current_personnel}명 신청`"
                  :content="`(팀별 ${hack.team_personnel}명)`"
                  :captionText="`${hack.started_at} 19:00 시작`"
                  :route="`/hacks/${hack.id}`"
                  buttonText="상세보기"
            />
          </router-link>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
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
    getMyHacksList () {
      this.$http({
        method: 'GET',
        url: '/hacks?status=my&is_mine=true'
      }).then(({ data }) => {
        console.log(data)
        this.hackLists = data.results
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getMyHacksList()
  }
}
</script>

<style lang="less" scoped>
  a:hover {
    text-decoration: none;
  }
</style>
