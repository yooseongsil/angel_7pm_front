<template>
  <v-main>
    <!--    진행상황-->
    <section>
      <div class="is-dark">진행상황: {{progress}}% / <span class="nes-text is-error">{{totalProgress}}% (권장)</span></div>
      <progress class="nes-progress is-error" value="80" max="100"></progress>
      <progress class="nes-progress is-pattern is-dark mission-progress" :value="progress" max="100"></progress>
    </section>
    <!--    요일 리스트-->
    <section class="d-flex mb-2">
      <template v-for="(day, index) in dayList">
        <a href="#" class="nes-badge" :key="index" style="display: inline-block;" @click="changeDay(index)">
          <span :class="day === today ? 'is-success' : 'is-dark'" style="letter-spacing: 0.3rem;">{{day}}</span>
        </a>
      </template>
    </section>
    <!--    환급 미션-->
    <section>
      <MissionComponent
        :missionTitle="missionText.missionTitle"
        :mission="missionText.mission"
        :missionShort="missionText.missionShort"
        :missionTimeLeft="missionText.missionTimeLeft"
        :missionQuestion="missionText.missionQuestion"
      />
    </section>
    <!--    Todos checkList-->
    <section>
      <TodosComponent v-for="(todos, index) in todosList"
                      :key="`${todos.title}-${index}`"
                      :todos-title="todos.title"
                      :todos="todos.todos"
                      class="mb-6"
      />
    </section>
    <!--    팀빌딩 미션-->
    <section class="d-flex flex-column align-center">
      <div>팀빌딩 미션:</div>
      <div>{{isMissionSuccess ? 'Success' : 'Fail'}}</div>
      <a class="nes-btn" href="#">팀빌딩 수정하기</a>
    </section>
  </v-main>
</template>
<script>
import MissionComponent from '../../components/hacks/MissionComponent'
import TodosComponent from '../../components/hacks/TodosComponent'
import moment from 'moment'

export default {
  name: 'HacksIngApplicantPage',
  data () {
    return {
      progress: 30,
      totalProgress: 50,
      today: '',
      dayList: ['금요일', '토요일', '일요일'],
      todosListAll: [
        // 금요일
        [
          {
            title: '자기소개',
            todos: [
              {
                text: '자기소개를 나누었나요?',
                checked: true,
                descriptionList: []
              },
              {
                text: '각자의 역할 및 강점 파악하기',
                checked: false,
                descriptionList: []

              }
            ]
          },
          {
            title: '아이디어',
            todos: [{
              text: '가능한 많은 아이디어를 생각하고 리스트화',
              checked: true,
              descriptionList: []
            },
            {
              text: '아래 기준에 맞춰 아이디어 선정',
              checked: false,
              descriptionList: [
                '심플하면서 혁신적인지',
                '문제 해결이 가능한지',
                '시간 내에 구현 가능한지',
                '평가 기준에 부합하는지']
            },
            {
              text: '우선순위 정하기',
              checked: false,
              descriptionList: [
                'Critical Path 정하기',
                '기능별 우선순위 정하기'
              ]
            },
            {
              text: '종이에 스케치해보기',
              checked: false,
              descriptionList: [
                '요구사항 명세 작성'
              ]
            }
            ]
          }
        ],
        // 토요일
        [
          {
            title: '토요토요',
            todos: [
              {
                text: '토요토요토요토요',
                checked: true,
                descriptionList: []
              },
              {
                text: '토요토요토요토요',
                checked: false,
                descriptionList: []

              }
            ]
          },
          {
            title: '토요토요2',
            todos: [{
              text: '가능한 많은 아이디어를 생각하고 리스트화',
              checked: true,
              descriptionList: []
            },
            {
              text: '아래 기준에 맞춰 아이디어 선정',
              checked: false,
              descriptionList: [
                '심플하면서 혁신적인지',
                '문제 해결이 가능한지',
                '시간 내에 구현 가능한지',
                '평가 기준에 부합하는지']
            },
            {
              text: '우선순위 정하기',
              checked: false,
              descriptionList: [
                'Critical Path 정하기',
                '기능별 우선순위 정하기'
              ]
            },
            {
              text: '종이에 스케치해보기',
              checked: false,
              descriptionList: [
                '요구사항 명세 작성'
              ]
            }
            ]
          }
        ],
        // 일요일
        [
          {
            title: '일요일',
            todos: [
              {
                text: '일요일',
                checked: true,
                descriptionList: []
              },
              {
                text: '일요일일요일일요일',
                checked: false,
                descriptionList: []

              }
            ]
          },
          {
            title: '토요토요2',
            todos: [{
              text: '가능한 많은 아이디어를 생각하고 리스트화',
              checked: true,
              descriptionList: []
            },
            {
              text: '아래 기준에 맞춰 아이디어 선정',
              checked: false,
              descriptionList: [
                '심플하면서 혁신적인지',
                '문제 해결이 가능한지',
                '시간 내에 구현 가능한지',
                '평가 기준에 부합하는지']
            },
            {
              text: '우선순위 정하기',
              checked: false,
              descriptionList: [
                'Critical Path 정하기',
                '기능별 우선순위 정하기'
              ]
            },
            {
              text: '종이에 스케치해보기',
              checked: false,
              descriptionList: [
                '요구사항 명세 작성'
              ]
            }
            ]
          }
        ]
      ],
      isMissionSuccess: false,
      missionTextList: [
        {
          missionTitle: '첫 번째 환급 미션!',
          mission: '슬랙에서 팀빌딩 양식을 제출하세요.',
          missionShort: '팀빌딩',
          missionTimeLeft: '16시간 46분 22초',
          missionQuestion: '팀빌딩을 하지 않으면 어떻게 되나요?'
        }, {
          missionTitle: '두 번째 환급 미션!',
          mission: '슬랙에서 아이디어를 제출하세요.',
          missionShort: '아이디어 제출',
          missionTimeLeft: '16시간 46분 22초',
          missionQuestion: '아이디어를 제출하지 못하면 어떻게 되나요?'
        }, {
          missionTitle: '최종 환급 미션!',
          mission: '슬랙에서 최종 결과물을 제출하세요.',
          missionShort: '결과물 제출',
          missionTimeLeft: '16시간 46분 22초',
          missionQuestion: '결과물을 제출하지 못하면 어떻게 되나요?'
        }
      ]
    }
  },
  created () {
    this.today = moment().format('dddd')
  },
  methods: {
    changeDay (index) {
      this.today = this.dayList[index]
    }
  },
  computed: {
    missionText () {
      const index = this.dayList.indexOf(this.today)
      return this.missionTextList[index]
    },
    todosList () {
      const index = this.dayList.indexOf(this.today)
      return this.todosListAll[index]
    }
  },
  components: {
    MissionComponent, TodosComponent
  }
}
</script>

<style lang="less" scoped>
  .nes-title {
    display: table;
    padding: 0 .5rem;
    margin: -1.8rem 0 1rem;
    font-size: 1rem;
    background-color: #fff;
  }

  .mission-progress {
    background: transparent;
    z-index: 1;
    position: absolute;
    margin-top: -59px;

    &::-webkit-progress-bar {
      background-color: transparent !important;
    }
    &::-moz-progress-bar {
      background-color: transparent !important;
    }
  }
</style>
