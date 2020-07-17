<template>
  <div>
    <section>
        <tab-component :items="items"></tab-component>
    </section>
    <v-img :src="`${hack.img}`"/>
    <v-container>
      <div class="d-flex justify-center mt-4">
        <span class="text-h5 mr-2">{{hack.title}}</span>
        <v-chip color="deep-purple" class="text-body-2" outlined>{{status}}</v-chip>
      </div>
<!--      시간-->
      <time-component :left-text="`${hack.started_at} 19:00 시작`" :right-text="`${hack.ended_at} 23:59 종료`"></time-component>
<!--      설명-->
      <div class="mt-4 text-body-2 grey--text text--lighten-1">
        {{hack.intro}}
      </div>
<!--      신청자 수, 모인 금액-->
      <xaxis-info-component :left-title="`신청자 수 (팀별 ${hack.max_personnel}명)`" :left-info="`1,379`" right-title="모인 금액" :right-info="`12,370,000원`"/>
<!--도전과제 제목-->
      <detail-section title="도전과제" :description="`${hack.subject}`"/>
      <detail-section title="심사방법 & 기간" :description="`${hack.judge_line}`">
        <!--      시간-->
        <!-- 심사시작 + judge_day -->
        <time-component left-text="20.07.13 (월) 심사 시작" right-text="20.07.15 (수) 우승팀 발표"/>
        </detail-section>
      <detail-section title="심사기준 & 우승팀 수" :description="`${hack.judge_line}`">
        <xaxis-info-component left-title="우승팀 수" :left-info="`${hack.awards_count}팀`" right-title="상금 책정 방식" right-info="1등 100%"/>
      </detail-section>
      <detail-section title="규칙" :description="`${hack.rule}`"/>
<!--      주최자-->
      <div style="position: relative;">
        <div class="text-caption grey--text text--lighten-1">주최자</div>
          <div>
            <div class="text-subtitle-1">김민섭 (코멘토/디자인팀)</div>
            <div class="text-caption grey--text text--lighten-1">minseop.kim@comento.kr</div>
          </div>
          <v-avatar style="position: absolute; top: 20px; right: 0px;">
            <img
              src="data:image/jpeg;base64,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"
              alt="John"
            >
          </v-avatar>
      </div>
      <v-chip class="px-4" color="#BB86FC" rounded text-color="black" large style="position: fixed; bottom: 20px; right: 20px;">
        <v-icon left class="mr-2">mdi-plus</v-icon>
        <span>신청하기</span>
      </v-chip>
    </v-container>
  </div>
</template>

<script>
import TabComponent from './TabComponent'
import DetailSection from '../DetailSection'
import TimeComponent from './TimeComponent'
import XaxisInfoComponent from './XaxisInfoComponent'
import axios from 'axios'

export default {
  name: 'HacksDetailPage',
  data () {
    return {
      id: null,
      tab: null,
      items: ['해커톤 정보', '팀빌딩', '해커톤 정보', '팀빌딩', '해커톤 정보', '팀빌딩'],
      hack: {}
    }
  },
  computed: {
    no () {
      return this.$route.params.id
    },
    // 해커톤 상태 ('w', '작성(write)'), ('p', '예정(plan)'), ('i', '진행(ing)'), ('c', '완료(complete)')
    status () {
      const mapToStatus = {
        w: '작성중',
        p: '모집중',
        i: '작성중',
        c: '진행완료'
      }
      return mapToStatus[this.hack.status]
    }
  },
  created () {
    this.getHackDetail()
    // console.log(new Date(20.07.12));
  },
  methods: {
    getHackDetail () {
      axios({
        method: 'GET',
        url: `${this.$store.state.host}/hacks/${this.no}`
      }).then(({ data }) => {
        console.log(data)
        this.hack = data
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  },
  components: {
    DetailSection,
    TabComponent,
    TimeComponent,
    XaxisInfoComponent
  }
}
</script>
