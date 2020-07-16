<template>
  <v-main>
    <section class="nes-container is-dark with-title is-left">
      <p class="title">결과물 제출</p>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="githubLink" style="color:#fff;">Github 링크</label>
        <input type="text" id="githubLink" v-model="githubLink" class="nes-input is-dark" placeholder="Github 링크">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="demoVideoLink" style="color:#fff;">데모영상 링크</label>
        <input type="text" id="demoVideoLink" v-model="demoVideoLink" class="nes-input is-dark" placeholder="데모영상 링크">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="speechPresentationLink" style="color:#fff;">발표영상 링크</label>
        <input type="text" id="speechPresentationLink" v-model="speechPresentationLink" class="nes-input is-dark"
               placeholder="발표영상 링크">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="presentationDataLink" style="color:#fff;">발표자료 링크</label>
        <input type="text" id="presentationDataLink" v-model="presentationDataLink" class="nes-input is-dark"
               placeholder="발표자료 링크">
      </div>
      <div class="text-center">
        <button type="button" class="nes-btn is-primary" @click="submit()">제출하기</button>
      </div>
    </section>
  </v-main>
</template>

<script>
export default {
  name: 'HacksIngMissionTeamIdeationFormPage',
  data: () => ({
    githubLink: '',
    demoVideoLink: '',
    speechPresentationLink: '',
    presentationDataLink: ''
  }),
  methods: {
    submit () {
      // todo: api 연동
    }
  }
}
</script>

<style scoped>

</style>
