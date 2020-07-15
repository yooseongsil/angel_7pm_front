<template>
  <v-main>
      <div>
        <div class="is-dark">진행상황: {{progress}}% / {{totalProgress}}% (권장)</div>
        <progress class="nes-progress is-pattern is-dark" :value="progress" max="100"></progress>
      </div>
      <div>
        <div class="d-flex">
          <template v-for="day in dayList">
            <a href="#" class="nes-badge" :key="day" style="display: inline-block;">
              <span :class="day === today ? 'is-success' : 'is-dark'">{{day}}</span>
            </a>
          </template>
        </div>
      </div>
      <div>
        <div class="nes-container is-dark with-title is-left">
          <p class="title">자기소개</p>
          <template v-for="todo in todoList">
            <div style="padding: 1rem 0;" :key="todo.id">
              <label>
                <input type="checkbox" class="nes-checkbox is-dark" :checked="todo.checked" />
                <span>{{todo.text}}</span>
              </label>
            </div>
          </template>
        </div>
        <div class="nes-container is-dark with-title is-left">
          <p class="title">아이디어</p>
          <template v-for="idea in ideaList">
            <div style="padding: 1rem 0;" :key="idea.id">
              <label>
                <input type="checkbox" class="nes-checkbox is-dark" :checked="idea.checked" />
                <span>{{idea.text}}</span>
              </label>
            </div>
          </template>
        </div>
      </div>
  </v-main>
</template>

<script>

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
          id: 1,
          text: '자기소개를 나누었나요?',
          checked: true,
          descriptionList: []
        },
        {
          id: 2,
          text: '각자의 역할 및 강점 파악하기',
          checked: false,
          descriptionList: []

        }
      ],
      ideaList: [
        {
          id: 1,
          text: '가능한 많은 아이디어를 생각하고 리스트화',
          checked: true,
          descriptionList: []

        },
        {
          id: 2,
          text: '아래 기준에 맞춰 아이디어 선정',
          checked: false,
          descriptionList: [
            '심플하면서 혁신적인지',
            '문제 해결이 가능한지',
            '시간 내에 구현 가능한지',
            '평가 기준에 부합하는지']
        },
        {
          id: 3,
          text: '우선순위 정하기',
          checked: false,
          descriptionList: [
            'Critical Path 정하기',
            '기능별 우선순위 정하기'
          ]
        },
        {
          id: 4,
          text: '종이에 스케치해보기',
          checked: false,
          descriptionList: [
            '요구사항 명세 작성'
          ]
        }
      ]
    }
  }
}
</script>

<style>
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
