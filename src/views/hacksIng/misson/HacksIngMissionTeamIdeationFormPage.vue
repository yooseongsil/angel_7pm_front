<template>
  <v-main>
    <section class="nes-container is-dark with-title is-left">
      <ValidationObserver ref="validObserver">
        <form>
          <p class="title">아이디어 제출</p>
          <ValidationProvider v-slot="{ errors, validate }" name="서비스 명" rules="required">
            <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
              <label for="serviceName" style="color:#fff;">서비스 명</label>
              <input
                type="text"
                id="serviceName"
                v-model="serviceName"
                class="nes-input is-dark mb-2"
                placeholder="최강개발대회"
                :error-messages="errors"
                required
              >
              <span
                class="is-dark error--text"
                v-html="errors[0]"
              ></span>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors, validate }" name="서비스 명" rules="required">
            <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
              <label for="serviceDescription" style="color:#fff;">서비스 설명</label>
              <textarea
                id="serviceDescription"
                v-model="serviceDescription"
                class="nes-textarea is-dark mb-2"
                placeholder="해커톤을 쉽게 만들고 참여할 수 있도록 돕습니다"
                :error-messages="errors"
                required
              />
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
    serviceName: '',
    serviceDescription: ''
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

<style lang="less" scoped>
  .nes-textarea {
    height: calc(100vh - 22rem);
  }
</style>
