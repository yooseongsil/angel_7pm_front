<template>
  <div id="hacksDetail" class="pb-15">
    <tab-component items="" :iconShow="true"></tab-component>
    <v-img :src="`${hack.img}`"/>
    <v-container>
      <div class="d-flex justify-center mt-4">
        <span class="text-h5 col-9 text-truncate">{{hack.title}}</span>
        <v-chip color="deep-purple" class="text-body-2 col-3 mt-3 d-block text-center" outlined>{{status}}</v-chip>
      </div>
      <!--시간-->
      <time-component :left-text="`${hack.started_at} 19:00 시작`" :right-text="`${hack.ended_at} 23:59 종료`"></time-component>
      <!--설명-->
      <div class="mt-4 text-body-2 grey--text text--lighten-1">
        "{{hack.intro}}"
      </div>
      <!--신청자 수, 모인 금액-->
      <xaxis-info-component :left-title="`신청자 수 (팀별 ${hack.max_personnel}명)`" :left-info="`1,379`" right-title="모인 금액" :right-info="`12,370,000원`"/>
      <!--도전과제 제목-->
      <detail-section title="도전과제" :description="`${hack.subject}`"/>
<!--      <detail-section title="심사방법 & 기간" :description="`${hack.judge_line}`">-->
        <!--시간-->
        <!-- 심사시작 + judge_day -->
<!--        <time-component left-text="20.07.13 (월) 심사 시작" right-text="20.07.15 (수) 우승팀 발표"/>-->
<!--        </detail-section>-->
<!--      <detail-section title="심사기준 & 우승팀 수" :description="`${hack.judge_line}`">-->
<!--        <xaxis-info-component left-title="우승팀 수" :left-info="`${hack.awards_count}팀`" right-title="상금 책정 방식" right-info="1등 100%"/>-->
<!--      </detail-section>-->
      <detail-section title="규칙" :description="`${hack.rule}`"/>
      <!--주최자-->
      <div style="position: relative;">
        <div class="text-caption grey--text text--lighten-1">주최자</div>
          <div>
            <div class="text-subtitle-1">{{`${hack.host_name} (${hack.belong}/${hack.role})`}}</div>
            <div class="text-caption grey--text text--lighten-1">{{hack.email}}</div>
          </div>
          <Avatar v-if="hack.email" :email="hack.email" style="position: absolute; top: 20px; right: 0" />
      </div>
      <v-chip class="px-4" color="#BB86FC" rounded text-color="black" large style="position: fixed; bottom: 20px; right: 20px;" @click="goToApplyHack" :disabled="userInfo && userInfo.portfolio_link === null" >
        <v-icon left class="mr-2">mdi-plus</v-icon>
        <span>신청하기</span>
      </v-chip>
      <v-snackbar
        v-model="snackbar"
        :vertical="vertical"
        timeout="-1"
      >
        포트폴리오를 제출하지 않으시면, 해커톤에 신청하실 수 없습니다.

        <template v-slot:action="{ attrs }">
          <v-btn
            color="indigo"
            text
            v-bind="attrs"
            @click="goToSubmitPortfolio"
          >
            포트폴리오 제출하러 가기
          </v-btn>
          <v-btn
            color="indigo"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import TabComponent from './TabComponent'
import DetailSection from '../DetailSection'
import TimeComponent from './TimeComponent'
import XaxisInfoComponent from './XaxisInfoComponent'
import axios from 'axios'
import Avatar from '../../components/base/main/Avatar'

export default {
  name: 'HacksDetailPage',
  data () {
    return {
      id: null,
      tab: null,
      hack: {},
      status: null,
      vertical: true
    }
  },
  computed: {
    no () {
      return this.$route.params.id
    },
    snackbar () {
      return this.userInfo.portfolio_link === null
    },
    userInfo () {
      return this.$store.getters.getUserInfo
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
        switch (data.status) {
          case 'w':
            this.status = '작성중'
            break
          case 'p':
            this.status = '모집중'
            break
          case 'i':
            this.status = '작성중'
            break
          case 'c':
            this.status = '진행완료'
            break
          default:
        }
      })
        .catch(({ error }) => {
          console.log(error)
        })
    },
    goToApplyHack () {
      this.$router.push(`/hacks/${this.no}/apply`)
    },
    goToSubmitPortfolio () {
      this.$router.push('/mypage/updateProfile')
    }
  },
  components: {
    DetailSection,
    TabComponent,
    TimeComponent,
    XaxisInfoComponent,
    Avatar
  }
}
</script>
