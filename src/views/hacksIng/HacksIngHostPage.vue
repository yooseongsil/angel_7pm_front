<template>
  <v-main>
    <!--    진행상황-->
    <section class="mb-10">
      <div class="is-dark">해커톤 진행상황: {{progress}}% / 100%</div>
      <progress class="nes-progress is-pattern is-dark" :value="progress" max="100"></progress>
    </section>

    <section class="d-flex mb-6">
      <template v-for="(day, index) in dayList">
        <a href="#" class="nes-badge" :key="index" style="display: inline-block;" @click="changeDay(index)">
          <span :class="activeIndex === index ? 'is-success' : 'is-dark'" style="letter-spacing: 0.3rem;">{{day}}</span>
        </a>
      </template>
    </section>

    <section>
      <TodosComponent v-for="(todos, index) in todosList"
                      :key="`${todos.title}-${index}`"
                      :todos-title="todos.title"
                      :todos="todos.todos"
                      class="mb-6"
      />
    </section>

    <template v-if="activeIndex > 0">
      <section class="nes-container is-dark with-title is-left mb-6" v-if="activeIndex < 3">
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
      <section class="nes-container is-dark with-title is-left mb-6" v-show="activeIndex === 2">
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
      <section class="nes-container is-dark with-title is-left" v-if="activeIndex === todosListAll.length - 1">
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
    </template>

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
import moment from 'moment'
import TodosComponent from '../../components/hacks/TodosComponent'
Vue.use(VueClipboard)

export default {
  name: 'HacksIngHostPage',
  components: { Modal, TodosComponent },
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
      buttonText: '',
      today: '',
      dayList: ['준비', '금요일', '토요일', '일요일'],
      todosListAll: [
        // 준비
        [
          {
            title: '해커톤 준비',
            todos: [
              {
                text: '슬랙 미션별 채널 만들기',
                checked: true,
                descriptionList: []
              },
              {
                text: '참가자 슬랙 입장 확인',
                checked: true,
                descriptionList: []
              }
            ]
          }
        ],
        // 금요일
        [
          {
            title: '미션 안내',
            todos: [
              {
                text: '환급 미션 안내',
                checked: true,
                descriptionList: []
              },
              {
                text: '팀빌딩 미션 마감 안내(내일 오후 12시까지)',
                checked: true,
                descriptionList: []
              }
            ]
          }
        ],
        // 토요일
        [
          {
            title: '미션 안내',
            todos: [
              {
                text: '팀빌딩 미션 마감 안내(오후 12시까지)',
                checked: true,
                descriptionList: []
              },
              {
                text: '아이데이션 미션 마감 안내(오후 11:59분까지)',
                checked: true,
                descriptionList: []
              }
            ]
          }
        ],
        // 일요일
        [
          {
            title: '미션 안내',
            todos: [
              {
                text: '결과물 미션 마감 안내(오후 11:59분까지)',
                checked: true,
                descriptionList: []
              }
            ]
          }
        ]
      ],
      activeIndex: 0
    }
  },
  created () {
    this.today = moment().format('dddd')
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
    },
    changeDay (index) {
      this.today = this.dayList[index]
    }
  },
  computed: {
    todosList () {
      let index = 0
      const hacksDays = ['금요일', '토요일', '일요일']
      if (hacksDays.includes(this.today)) {
        index = this.dayList.indexOf(this.today)
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.activeIndex = index
      return this.todosListAll[index]
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
