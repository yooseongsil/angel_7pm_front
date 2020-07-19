<template>
  <div id="hacksDetail" class="pb-15">
    <tab-component items="" :showHistory="true"></tab-component>
    <v-img :src="`${hack.img}`"/>
    <div class="d-flex justify-center mt-4">
      <span class="text-h5 col-9 text-truncate pl-0">{{hack.title}}</span>
      <v-chip color="deep-purple" class="text-body-2 col-3 mt-3 d-block text-center" outlined>{{status}}</v-chip>
    </div>
    <!--시간-->
    <time-component :left-text="printHackDate(hack.started_at, '19:00 시작')"
                    :right-text="printHackDate(hack.ended_at, '23:59 종료')"
    />
    <!--설명-->
    <div class="mt-4 text-body-2 grey--text text--lighten-1">
      {{hack.intro}}
    </div>
    <!--신청자 수, 모인 금액-->
    <xaxis-info-component :left-title="`신청자 수 (팀별 ${hack.max_personnel}명)`"
                          :left-info="`${hack.max_personnel}명`"
                          right-title="모인 금액"
                          :right-info="`${hack.total_fee}원`"
    />
    <!--도전과제 제목-->
    <detail-section title="해커톤 주제" :description="`${hack.subject}`"/>
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
        <Avatar v-if="hack.host_name" :email="hack.host_name" style="position: absolute; top: 20px; right: 0" />
    </div>
    <v-chip
      class="px-4"
      color="#BB86FC"
      rounded
      text-color="black"
      large
      style="height: 48px; position: fixed; bottom: 20px; right: 20px;"
      @click="goToApplyHack"
      :disabled="(userInfo && userInfo.portfolio_link === null) || isApplied"
    >
      <v-icon left class="mr-2">mdi-clipboard-check</v-icon>
      <span>신청하기</span>
    </v-chip>

    <Modal modalTitle="포트폴리오가 없으면 신청할 수 없습니다"
           modalText="포트폴리오를 제출하러 가볼까요?"
           modalButtonText="제출하기"
           :function="goUpdateProfile"
           :show="showModal"
           @close="showModal=false"
    />
  </div>
</template>

<script>
import TabComponent from './TabComponent'
import DetailSection from '../DetailSection'
import TimeComponent from './TimeComponent'
import XaxisInfoComponent from './XaxisInfoComponent'
import Avatar from '../../components/base/main/Avatar'
import Modal from '../../components/base/main/Modal'
import moment from 'moment'

export default {
  name: 'HacksDetailPage',
  data () {
    return {
      id: null,
      tab: null,
      hack: {},
      status: null,
      vertical: true,
      showModal: false
    }
  },
  computed: {
    no () {
      return this.$route.params.id
    },
    userInfo () {
      return this.$store.getters.getUserInfo
    }
  },
  created () {
    this.getHackDetail()
    if (!this.userInfo.portfolio_link) {
      // 포트폴리오가 없으면 모달 노출
      this.showModal = true
    }
  },
  methods: {
    goUpdateProfile () {
      this.$router.push('/mypage/updateProfile')
    },
    printHackDate (hackDate, dateText) {
      return `${moment(hackDate).format('YY.MM.DD(ddd)')} ${dateText}`
    },
    getHackDetail () {
      this.$http({
        method: 'GET',
        url: `/hacks/${this.no}`
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
            this.status = '진행 완료'
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
    Modal,
    DetailSection,
    TabComponent,
    TimeComponent,
    XaxisInfoComponent,
    Avatar
  }
}
</script>
