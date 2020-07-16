<template>
  <v-main>
    <section class="nes-container is-dark with-title is-left">
      <p class="title">아이디어 제출</p>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="serviceName" style="color:#fff;">서비스 명</label>
        <input type="text" id="serviceName" v-model="serviceName" class="nes-input is-dark" placeholder="최강개발대회">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="serviceDescription" style="color:#fff;">서비스 설명</label>
        <textarea id="serviceDescription" v-model="serviceDescription" class="nes-textarea is-dark" placeholder="해커톤을 쉽게 만들고 참여할 수 있도록 돕습니다"></textarea>
      </div>
      <div class="text-center">
        <button type="button" class="nes-btn is-primary" @click="submit()">제출하기</button>
      </div>
    </section>
  </v-main>
</template>

<script>
export default {
  name: 'HacksMissionTeamIdeationFormPage',
  data: () => ({
    serviceName: '',
    serviceDescription: ''
  }),
  methods: {
    submit () {
      // todo: api 연동
    }
  }
}
</script>

<style lang="less" scoped>
  .nes-textarea {
    height: calc(100vh - 22rem);
  }
</style>
