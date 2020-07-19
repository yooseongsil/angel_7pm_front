<template>
  <v-main>
    <section class="nes-container is-dark with-title is-left">
      <ValidationObserver ref="validObserver">
        <form>
          <p class="title">결과물 제출</p>

          <ValidationProvider v-slot="{ errors, validate }" name="Github 링크" rules="required">
            <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
              <label for="githubLink" style="color:#fff;">Github 링크</label>
              <input type="text" id="githubLink" v-model="githubLink" class="nes-input is-dark mb-2" placeholder="Github 링크">
              <span
                class="is-dark error--text"
                v-html="errors[0]"
              ></span>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors, validate }" name="데모영상 링크" rules="required">
            <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
              <label for="demoVideoLink" style="color:#fff;">데모영상 링크</label>
              <input type="text" id="demoVideoLink" v-model="demoVideoLink" class="nes-input is-dark mb-2" placeholder="데모영상 링크">
              <span
                class="is-dark error--text"
                v-html="errors[0]"
              ></span>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors, validate }" name="발표영상 링크" rules="required">
            <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
              <label for="speechPresentationLink" style="color:#fff;">발표영상 링크</label>
              <input type="text" id="speechPresentationLink" v-model="speechPresentationLink" class="nes-input is-dark mb-2"
                     placeholder="발표영상 링크">
              <span
                class="is-dark error--text"
                v-html="errors[0]"
              ></span>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors, validate }" name="데모영상 링크" rules="required">
            <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
              <label for="presentationDataLink" style="color:#fff;">발표자료 링크</label>
              <input type="text" id="presentationDataLink" v-model="presentationDataLink" class="nes-input is-dark mb-2"
                     placeholder="발표자료 링크">
              <span
                class="is-dark error--text"
                v-html="errors[0]"
              ></span>
            </div>
          </ValidationProvider>

          <div class="text-center">
            <button type="button" class="nes-btn is-primary" @click="validCheck()">제출하기</button>
          </div>
        </form>
      </ValidationObserver>
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
import Modal from '../../../components/base/hacksIng/Modal'

export default {
  name: 'HacksIngMissionTeamIdeationFormPage',
  data: () => ({
    githubLink: '',
    demoVideoLink: '',
    speechPresentationLink: '',
    presentationDataLink: '',
    showHacksIngModal: false,
    modalTitle: '',
    modalText: '',
    buttonText: ''
  }),
  methods: {
    async validCheck () {
      await this.$refs.validObserver.validate().then(isValid => {
        if (isValid) {
          this.submit()
        } else {
          this.modalTitle = '저장 불가'
          this.modalText = '내용을 모두 입력해주세요'
          this.buttonText = '확인'
          this.showHacksIngModal = true
        }
      })
    },
    submit () {
      // todo: api 연동
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>

</style>
