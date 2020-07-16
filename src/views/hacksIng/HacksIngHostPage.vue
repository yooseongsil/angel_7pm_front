<template>
  <v-main>
    <!--    진행상황-->
    <section class="mb-10">
      <div class="is-dark">해커톤 진행상황: {{progress}}% / 100%</div>
      <progress class="nes-progress is-pattern is-dark" :value="progress" max="100"></progress>
    </section>

    <section class="nes-container is-dark with-title is-left mb-6">
      <p class="title">팀빌딩 제출 링크</p>
      <input type="url" v-model="teamFormLink.teamBuilding" style="display: none">
      <div class="text-center">
        <button type="button" class="nes-btn is-primary"
                v-clipboard:copy="teamFormLink.teamBuilding"
                v-clipboard:success="onCopy"
        >
          링크 만들기
        </button>
      </div>
    </section>
    <section class="nes-container is-dark with-title is-left mb-6">
      <p class="title">아이디어 제출 링크</p>
      <input type="url" v-model="teamFormLink.teamIdeation" style="display: none">
      <div class="text-center">
        <button type="button" class="nes-btn is-primary"
                v-clipboard:copy="teamFormLink.teamIdeation"
                v-clipboard:success="onCopy"
        >
          링크 만들기
        </button>
      </div>
    </section>
    <section class="nes-container is-dark with-title is-left">
      <p class="title">결과물 제출 링크</p>
      <input type="url" v-model="teamFormLink.teamSubmission" style="display: none">
      <div class="text-center">
        <button type="button" class="nes-btn is-primary"
                v-clipboard:copy="teamFormLink.teamSubmission"
                v-clipboard:success="onCopy"
        >
          링크 만들기
        </button>
      </div>
    </section>

    <dialog class="nes-dialog is-dark ma-auto" id="dialog-dark">
      <form method="dialog">
        <p class="title">복사 완료!</p>
        <p>링크를 슬랙에 올려주세요.</p>
        <menu class="dialog-menu text-center">
          <button class="nes-btn" @click="showHacksIngModal=false">닫기</button>
        </menu>
      </form>
    </dialog>
  </v-main>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

export default {
  name: 'HacksIngHostPage',
  data () {
    return {
      teamFormLink: {
        teamBuilding: '/hacks/ing/mission/teamBuilding',
        teamIdeation: '/hacks/ing/mission/teamIdeation',
        teamSubmission: './hacks/ing/mission/teamSubmission'
      },
      showHacksIngModal: false,
      progress: 30
    }
  },
  watch: {
    showHacksIngModal () {
      if (this.showHacksIngModal) {
        document.getElementById('dialog-dark').showModal()
      }
    }
  },
  created () {
    this.getHacksDate()
  },
  methods: {
    onCopy () {
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
