<template>
  <section>
    <div class="d-flex flex-row align-center">
      <i class="nes-icon coin is-small"></i>
      <span class="nes-text is-warning">{{missionTitle}}</span>
    </div>
    <div class="mb-4">{{mission}}</div>
    <div>{{missionShort}}까지 남은 시간:</div>
    <div>{{missionTimeLeft}}</div>
    <div class="nes-text is-warning mt-4 mb-6"
         style="text-decoration: underline;"
         @click="showHacksIngModal=true"
    >
      {{missionQuestion}}
    </div>

    <Modal :show="showHacksIngModal"
           @close="showHacksIngModal=false"
           :modalTitle="modalTitle"
           :modalText="modalText"
           :buttonText="buttonText"
    />
  </section>
</template>

<script>
import Modal from '../../components/base/hacksIng/Modal'
export default {
  name: 'MissionComponent',
  props: ['missionTitle', 'mission', 'missionShort', 'missionTimeLeft', 'missionQuestion', 'missionQuestionLink'],
  data: () => ({
    showHacksIngModal: false,
    modalTitle: '환급 안내',
    modalText: `<div class="lists">
        <ul class="nes-list is-circle">
          <li class="mb-2">제한 시간 동안 미션에 성공할 때마다 참가비가 환급됩니다.</li>
          <li class="mb-2">팀빌딩 미션: 20% 환급</li>
          <li class="mb-2">아이데이션 미션: 30% 환급</li>
          <li>결과물제출 미션: 50% 환급<br>(미션 수행 결과물이 부적합한 경우, 환급되지 않을 수 있습니다)</li>
        </ul>
      </div>`,
    buttonText: '확인'
  }),
  components: {
    Modal
  }
}
</script>

<style lang="less">
  .nes-list.is-circle li::before {
    top: 4px;
    color: white !important;
  }
</style>
