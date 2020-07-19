<template>
  <v-main>
    <!--    진행상황-->
    <section class="mb-10">
      <div class="is-dark">해커톤 진행상황: {{progress}}% / 100%</div>
      <progress class="nes-progress is-pattern is-dark" :value="progress" max="100"></progress>
    </section>

    <section class="nes-container is-dark with-title is-left mb-6">
      <p class="title">팀빌딩 제출 링크</p>
      <input type="url" v-model="teamSurveyLink.teamBuilding" style="display: none">
      <div class="text-center">
        <button type="button" class="nes-btn is-primary"
                v-clipboard:copy="teamSurveyLink.teamBuilding"
                v-clipboard:success="onCopy"
        >
          링크 만들기
        </button>
      </div>
    </section>
    <section class="nes-container is-dark with-title is-left mb-6">
      <p class="title">아이디어 제출 링크</p>
      <input type="url" v-model="teamSurveyLink.teamIdeation" style="display: none">
      <div class="text-center">
        <button type="button" class="nes-btn is-primary"
                v-clipboard:copy="teamSurveyLink.teamIdeation"
                v-clipboard:success="onCopy"
        >
          링크 만들기
        </button>
      </div>
    </section>
    <section class="nes-container is-dark with-title is-left">
      <p class="title">결과물 제출 링크</p>
      <input type="url" v-model="teamSurveyLink.teamSubmission" style="display: none">
      <div class="text-center">
        <button type="button" class="nes-btn is-primary"
                v-clipboard:copy="teamSurveyLink.teamSubmission"
                v-clipboard:success="onCopy"
        >
          링크 만들기
        </button>
      </div>
    </section>

    <Modal :show="showHacksIngModal"
           @close="showHacksIngModal=false"
           :modalTitle="modalTitle"
           :modalText="modalText"
           :buttonText="buttonText"
    />
  </v-main>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import Modal from '../../components/base/hacksIng/Modal'
Vue.use(VueClipboard)

export default {
  name: 'HacksIngHostPage',
  components: { Modal },
  data () {
    return {
      // teamFormLink: {
      // teamBuilding: '/hacks/ing/mission/teamBuilding',
      // teamIdeation: '/hacks/ing/mission/teamIdeation',
      // teamSubmission: '/hacks/ing/mission/teamSubmission'
      // },
      teamSurveyLink: {
        teamBuilding: 'https://forms.gle/M79xbnGgWCgzmrLVA',
        teamIdeation: 'https://forms.gle/CA9ppA6s6Dhj1kGn8',
        teamSubmission: 'https://forms.gle/cKuzHGF3SpyFxvTY9'
      },
      showHacksIngModal: false,
      progress: 30,
      modalTitle: '',
      modalText: '',
      buttonText: ''
    }
  },
  created () {
    this.getHacksDate()
  },
  methods: {
    onCopy () {
      this.modalTitle = '복사 완료!'
      this.modalText = '링크를 슬랙에 올려주세요.'
      this.buttonText = '닫기'
      this.showHacksIngModal = true
    },
    getHacksDate () {
      // todo: api 연동 (오늘 기준 해커톤 남은 기간 progress)
    }
  }
}
</script>

<style lang="less">
  .nes-title {
    display: table;
    padding: 0 .5rem;
    margin: -1.8rem 0 1rem;
    font-size: 1rem;
    background-color: #fff;
  }
</style>
