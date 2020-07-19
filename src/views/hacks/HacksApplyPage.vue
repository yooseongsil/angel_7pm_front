<template>
  <v-main>
    <v-col cols="12" style="position: relative;">
      <h1 class="text-h3 white--text mt-12">해커톤 <br class="only-mobile">신청</h1>
      <img :src="require('../../assets/images/illust/illust_hackVote_3.svg')" alt="" class="list_title_img">
    </v-col>
    <v-col cols="12">
      <ValidationObserver ref="validObserver">
        <form>
          <ValidationProvider v-slot="{ errors, validate }" name="이메일" rules="required">
            <v-text-field
              v-model="userInfo.email"
              label="이메일"
              filled
              hint="이메일을 알려주세요"
              color="deep-purple accent-1"
              :error-messages="errors"
              required
            />
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors, validate }" name="이름" rules="required">
            <v-text-field
              v-model="userInfo.name"
              label="이름"
              filled
              hint="이름을 알려주세요"
              color="deep-purple accent-1"
              :error-messages="errors"
              required
            ></v-text-field>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors, validate }" name="직무" rules="required">
            <v-text-field
              v-model="userInfo.role"
              label="직무 또는 전공"
              filled
              hint="직무 또는 전공을 알려주세요"
              color="deep-purple accent-1"
              :error-messages="errors"
              required
            ></v-text-field>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors, validate }" name="참가비" rules="required|min_value:10000|max_value:100000">
            <v-text-field
              v-model="fee"
              label="참가비(최소 1만원 ~ 최대 10만원)"
              filled
              hint="참가비로 의욕을 보여주세요!"
              color="deep-purple accent-1"
              :error-messages="errors"
              required
            ></v-text-field>
          </ValidationProvider>
          <v-btn
            block
            color="#BB86FC"
            class="mt-8"
            @click="validCheck()"
          >
            신청하기
          </v-btn>
        </form>
      </ValidationObserver>
    </v-col>

    <Modal
      :show="showModal"
      @close="showModal=false"
      :modalTitle="modalTitle"
      :modalText="modalText"
      :modalButtonText="modalButtonText"
      :function="goMyHacksList"
    />
  </v-main>
</template>

<script>
import Modal from '../../components/base/main/Modal'
export default {
  name: 'HacksApplyPage',
  components: { Modal },
  data: () => ({
    userInfo: null,
    fee: 10000,
    showModal: false,
    modalTitle: '',
    modalText: '',
    modalButtonText: ''
  }),
  created () {
    this.userInfo = this.getUserInfo
  },
  methods: {
    goMyHacksList () {
      this.$router.push('/mypage/hacks/list')
    },
    async validCheck () {
      await this.$refs.validObserver.validate().then(isValid => {
        if (isValid) {
          this.applyHacks()
        }
      })
    },
    applyHacks () {
      this.$http({
        method: 'POST',
        url: '/hacks/apply/',
        data: {
          is_paid: true,
          role: this.userInfo.role,
          hacks: this.$route.params.id,
          user: this.userInfo.id
        }
      }).then((res) => {
        const data = res.data
        console.log(data)
        if (res.status === 201) {
          this.modalTitle = '참가 신청 완료'
          this.modalText = '해커톤에 참가신청되었습니다.'
          this.buttonText = '참가확인하러가기'
          this.showModal = true
        }
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  },
  computed: {
    getUserInfo () {
      return this.$store.getters.getUserInfo
    }
  }
}
</script>

<style scoped>

</style>
