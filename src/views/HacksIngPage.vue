<template>
  <v-main class="is-dark" style="background-color:#212529;">
<!--    진행상황-->
      <section>
        <div class="is-dark">진행상황: {{progress}}% / {{totalProgress}}% (권장)</div>
        <progress class="nes-progress is-pattern is-dark" :value="progress" max="100"></progress>
      </section>
<!--    요일 리스트-->
        <section class="d-flex">
          <template v-for="(day, index) in dayList">
            <a href="#" class="nes-badge" :key="index" style="display: inline-block;">
              <span :class="day === today ? 'is-success' : 'is-dark'">{{day}}</span>
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
        :missionQuestionLink="missionText.missionQuestionLink"/>
      <!-- coin -->
      <i class="nes-icon coin is-small"></i>
      <span class="nes-text is-warning">첫 번째 환급 미션!</span>
      <div>슬랙에서 팀빌딩 양식을 제출하세요.</div>
      <div>팀빌딩까지 남은 시간:</div>
      <div>16시간 46분 22초</div>
      <div class="nes-text is-warning" style="text-decoration: underline;">팀빌딩을 하지 않으면 어떻게 되나요?</div>
    </section>
<!--    자기소개-->
        <section class="nes-container is-dark with-title is-left">
          <p class="title">자기소개</p>
          <template v-for="todo in todoList">
            <div style="padding: 1rem 0;" :key="todo.id">
              <label>
                <input type="checkbox" class="nes-checkbox is-dark" :checked="todo.checked" />
                <span>{{todo.text}}</span>
              </label>
            </div>
            <div :key="`todo-${index}`" class="lists">
              <ul class="nes-list is-circle">
                <template v-for="(description, index) in todo.descriptionList">
                      <li :key="`des-${index}`">{{description}}</li>
                </template>
              </ul>
            </div>
          </template>
        </section>
<!--    아이디어-->
        <section class="nes-container is-dark with-title is-left">
          <p class="title">아이디어</p>
          <template v-for="idea in ideaList">
            <div style="padding: 1rem 0;" :key="`idea-${index}`">
              <label>
                <input type="checkbox" class="nes-checkbox is-dark" :checked="idea.checked" />
                <span>{{idea.text}}</span>
              </label>
            </div>
            <div :key="`idea-des-${index}`" class="lists">
              <ul class="nes-list is-circle">
                <template v-for="(description, index) in idea.descriptionList">
                  <li :key="`des-${index}`">{{description}}</li>
                </template>
              </ul>
            </div>
          </template>
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
import MissionComponent from '../components/hacks/MissionComponent'

export default {
  name: 'HacksIngPage',
  data () {
    return {
      progress: 30,
      totalProgress: 50,
      // new Date에서 추출
      today: '금요일',
      dayList: ['금요일', '토요일', '일요일'],
      todoList: [
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
      ],
      ideaList: [
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
      ],
      isMissionSuccess: false,
      missionText: [
        {
          missionTitle: '첫 번째 환급 미션!',
          mission: '슬랙에서 팀빌딩 양식을 제출하세요.',
          missionShort: '팀빌딩',
          missionTimeLeft: '16시간 46분 22초',
          missionQuestion: '팀빌딩을 하지 않으면 어떻게 되나요?',
          missionQuestionLink: 'https://comento.kr'
        }, {
          missionTitle: '두 번째 환급 미션!',
          mission: '슬랙에서 아이디어를 제출하세요.',
          missionShort: '아이디어 제출',
          missionTimeLeft: '16시간 46분 22초',
          missionQuestion: '아이디어를 제출하지 못하면 어떻게 되나요?',
          missionQuestionLink: 'https://comento.kr'
        }, {
          missionTitle: '최종 환급 미션!',
          mission: '슬랙에서 최종 결과물을 제출하세요.',
          missionShort: '결과물 제출',
          missionTimeLeft: '16시간 46분 22초',
          missionQuestion: '결과물을 제출하지 못하면 어떻게 되나요?',
          missionQuestionLink: 'https://comento.kr'
        }
      ]
    }
  },
  components: {
    MissionComponent
  }
}
</script>

<style lang="less">
  .is-dark {
    color: white;
  }
  .nes-title {
    display: table;
    padding: 0 .5rem;
    margin: -1.8rem 0 1rem;
    font-size: 1rem;
    background-color: #fff;
  }
</style>
