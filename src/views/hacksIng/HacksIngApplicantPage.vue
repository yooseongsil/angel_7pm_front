<template>
  <v-main>
    <!--    진행상황-->
    <section>
      <div class="is-dark">진행상황: {{progress}}% / <span class="nes-text" :class="colorClass">{{totalProgress}}% (권장)</span></div>
      <progress class="nes-progress" :class="colorClass" :value="totalProgress" max="100"></progress>
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
        :missionTimeLeft="missionEndAt"
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
<!--    <section class="d-flex flex-column align-center">-->
<!--      <div>팀빌딩 미션:</div>-->
<!--      <div class="nes-text" :class="isMissionSuccess === 'Success'? 'is-success' : ''">{{isMissionSuccess}}</div>-->
<!--      <a class="nes-btn" href="#">팀빌딩 수정하기</a>-->
<!--    </section>-->
  </v-main>
</template>
<script>
import MissionComponent from '../../components/hacks/MissionComponent'
import TodosComponent from '../../components/hacks/TodosComponent'
import timer from '../../filters/timer'
import moment from 'moment'

export default {
  name: 'HacksIngApplicantPage',
  data () {
    return {
      progress: 30,
      totalProgress: 40,
      hackInfo: {},
      hackApplyInfo: {},
      today: '',
      startedAt: null,
      teamBuildingEndAt: null,
      ideaEndAt: null,
      resultEndAt: null,
      colorClass: 'is-success',
      teamBuildingStartAt: null,
      ideaStartAt: null,
      resultStartAt: null,
      dayList: ['금요일', '토요일', '일요일'],
      missionTrueFalse: ['Fail', 'Fail', 'Fail'],
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
            todos: [
              {
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
                  '평가 기준에 부합하는지'
                ]
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
            title: '기획 & 디자인',
            todos: [
              {
                text: '플로우 차트 & 상세 기획',
                checked: true,
                descriptionList: []
              },
              {
                text: '와이어프레임',
                checked: false,
                descriptionList: []

              },
              {
                text: '벤치마크 / 프레임웤 참고',
                checked: true,
                descriptionList: []
              }, {
                text: '디자인',
                checked: true,
                descriptionList: []
              }
            ]
          },
          {
            title: '개발',
            todos: [
              {
                text: '개발 환경 초기 세팅, 기술 스택 선정',
                checked: true,
                descriptionList: []
              },
              {
                text: '개발 기간 산정',
                checked: false,
                descriptionList: []

              },
              {
                text: '개발',
                checked: false,
                descriptionList: [
                  '퍼블리싱',
                  '연동'
                ]
              }
            ]
          }
        ],
        // 일요일
        [
          {
            title: '기획 & 디자인',
            todos: [
              {
                text: '발표 자료 준비',
                checked: true,
                descriptionList: []
              },
              {
                text: '발표 준비',
                checked: false,
                descriptionList: []
              }
            ]
          },
          {
            title: '개발',
            todos: [
              {
                text: '개발 문서화',
                checked: true,
                descriptionList: []
              },
              {
                text: 'QA',
                checked: false,
                descriptionList: []

              },
              {
                text: '데모',
                checked: false,
                descriptionList: []

              }
            ]
          }
        ]
      ],
      missionTextList: [
        {
          missionTitle: '첫 번째 환급 미션!',
          mission: '슬랙에서 팀빌딩 양식을 제출하세요.',
          missionShort: '팀빌딩',
          missionTimeLeft: this.teamBuildingEndAt,
          missionQuestion: '팀빌딩을 하지 않으면 어떻게 되나요?'
        }, {
          missionTitle: '두 번째 환급 미션!',
          mission: '슬랙에서 아이디어를 제출하세요.',
          missionShort: '아이디어 제출',
          missionTimeLeft: this.ideaEndAt,
          missionQuestion: '아이디어를 제출하지 못하면 어떻게 되나요?'
        }, {
          missionTitle: '최종 환급 미션!',
          mission: '슬랙에서 최종 결과물을 제출하세요.',
          missionShort: '결과물 제출',
          missionTimeLeft: this.resultEndAt,
          missionQuestion: '결과물을 제출하지 못하면 어떻게 되나요?'
        }
      ]
    }
  },
  // [미션 완료 여부] t:팀 생성 완료 i:아이디어 완료 s:제출 완료
  // 해커톤 상태 ('w', '작성(write)'), ('p', '예정(plan)'), ('i', '진행(ing)'), ('c', '완료(complete)')
  async created () {
    this.today = moment().format('dddd')
    await this.getHackInfo()
    await this.getApplyInfo()
  },
  methods: {
    changeDay (index) {
      this.today = this.dayList[index]
    },
    getApplyInfo () {
      this.$http({
        method: 'GET',
        url: '/hacks/apply'
      }).then(({ data }) => {
        // [미션 완료 여부] t:팀 생성 완료 i:아이디어 완료 s:제출 완료
        this.hackApplyInfo = data.results[0]
        const missionLevel = data.results[0].mission_level
        if (missionLevel.indexOf('t') !== -1) {
          this.missionTrueFalse[0] = 'Success'
          this.progress = 40
          this.totalProgress = 60
          this.colorClass = 'is-warning'
        }
        if (missionLevel.indexOf('i') !== -1) {
          this.missionTrueFalse[1] = 'Success'
          this.progress = 50
          this.totalProgress = 90
          this.colorClass = 'is-error'
        }
        if (missionLevel.indexOf('s') !== -1) {
          this.missionTrueFalse[2] = 'Success'
          this.progress = 100
          this.totalProgress = 100
        }
      })
        .catch(({ error }) => {
          console.log(error)
        })
    },
    getHackInfo () {
      this.$http({
        method: 'GET',
        url: `/hacks/${this.$route.params.id}`
      }).then(({ data }) => {
        this.startedAt = data.started_at
        this.hackInfo = data
        console.log(data)
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  },
  computed: {
    missionText () {
      const index = this.dayList.indexOf(this.today)
      return this.missionTextList[index]
    },
    missionEndAt () {
      const index = this.dayList.indexOf(this.today)
      const map = [
        'teamBuildingEndAt', 'ideaEndAt', 'resultEndAt'
      ]
      return this[`${map[index]}`]
    },
    todosList () {
      const index = this.dayList.indexOf(this.today)
      return this.todosListAll[index]
    },
    isMissionSuccess () {
      const index = this.dayList.indexOf(this.today)
      return this.missionTrueFalse[index]
    }
  },
  mounted () {
    this.teamBuildingStartAt = moment(moment(this.hackInfo.started_at).format('YYYY-MM-DD')).add(1, 'days').add(12, 'hours').format('YYYY-MM-DD HH:mm:ss')
    this.ideaStartAt = moment(moment(this.hackInfo.started_at).format('YYYY-MM-DD')).add(1, 'days').add(23, 'hours').add(59, 'minutes').format('YYYY-MM-DD HH:mm:ss')
    this.resultStartAt = moment(moment(this.hackInfo.started_at).format('YYYY-MM-DD')).add(2, 'days').add(23, 'hours').add(59, 'minutes').format('YYYY-MM-DD HH:mm:ss')
    this.teamBuildingEndAt = timer(this.teamBuildingStartAt)
    this.ideaEndAt = timer(this.ideaStartAt)
    this.resultEndAt = timer(this.resultStartAt)
  },
  updated () {
    this.teamBuildingEndAt = timer(this.teamBuildingStartAt)
    this.ideaEndAt = timer(this.ideaStartAt)
    this.resultEndAt = timer(this.resultStartAt)
    this.$nextTick(() => {
      setTimeout(() => {
        // 남은 시간
        this.teamBuildingEndAt = timer(this.teamBuildingStartAt)
        this.ideaEndAt = timer(this.ideaStartAt)
        this.resultEndAt = timer(this.resultStartAt)
      }, 1000)
    })
  },
  filters: {
    timer
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
