<template>
  <div id="signUp">
    <section>
      <tab-component :showHistory="true" :isMypage="false"></tab-component>
    </section>
    <v-col cols="12">
      <h1 class="text-h3 white--text mt-12 mb-6">회원정보 수정</h1>

      <ValidationObserver ref="validObserver">
        <form>
          <ValidationProvider v-slot="{ errors, validate }" name="이메일" rules="required">
            <v-text-field
              v-model="userInfo.email"
              label="이메일"
              filled
              hint="이메일을 입력하세요"
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
              hint="이름을 입력하세요"
              color="deep-purple accent-1"
              :error-messages="errors"
              required
            />
          </ValidationProvider>
          <v-row>
            <v-col cols="6" class="pb-0">
              <ValidationProvider v-slot="{ errors, validate }" name="소속" rules="required">
                <v-text-field
                  v-model="userInfo.belong"
                  label="소속"
                  filled
                  hint="회사/학교를 입력하세요"
                  color="deep-purple accent-1"
                  :error-messages="errors"
                  required
                />
              </ValidationProvider>
            </v-col>
            <v-col cols="6" class="pb-0">
              <ValidationProvider v-slot="{ errors, validate }" name="직무" rules="required">
                <v-text-field
                  v-model="userInfo.role"
                  label="직무"
                  filled
                  hint="직무를 입력하세요"
                  color="deep-purple accent-1"
                  :error-messages="errors"
                  required
                />
              </ValidationProvider>
            </v-col>
          </v-row>
          <ValidationProvider v-slot="{ errors, validate }" name="포트폴리오" rules="required">
            <v-text-field
              v-model="userInfo.portfolio_link"
              label="포트폴리오"
              type="text"
              filled
              hint="포트폴리오 링크를 입력하세요"
              color="deep-purple accent-1"
              :error-messages="errors"
              required
            />
          </ValidationProvider>
          <v-btn
            block
            color="#BB86FC"
            @click="validCheck()"
            class="mt-8"
          >
            저장하기
          </v-btn>
        </form>
      </ValidationObserver>
    </v-col>
    <v-snackbar
      v-model="snackbar"
      centered
      vertical
    >
      {{ responseMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import TabComponent from '../hacks/TabComponent'

export default {
  name: 'SignUpPage',
  data: () => ({
    userInfo: null,
    responseMessage: null,
    snackbar: false
  }),
  created () {
    this.userInfo = this.getUserInfo
    this.getAccountsProfile()
  },
  computed: {
    getUserInfo () {
      return this.$store.getters.getUserInfo
    }
  },
  methods: {
    getAccountsProfile () {
      this.$http.get(`/accounts/profile/${this.$store.state.userInfo.id}`)
        .then(({ data }) => {
          this.userInfo = data
          console.log(this.userInfo)
        })
    },
    async validCheck () {
      await this.$refs.validObserver.validate().then(isValid => {
        if (isValid) {
          this.updateProfile()
        }
      })
    },
    updateProfile () {
      console.log(this.userInfo.portfolio)
      const params = {
        email: this.userInfo.email,
        name: this.userInfo.name,
        belong: this.userInfo.belong,
        role: this.userInfo.role,
        portfolio_link: this.userInfo.portfolio
      }
      this.$http.patch(`/accounts/profile/${this.userInfo.id}`, params)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
          this.responseMessage = '회원 정보가 정상적으로 업데이트되었습니다.'
          this.snackbar = true
        }
        )
        .catch(({ error }) => {
          this.responseMessage = '회원 정보를 업데이트 하는데 에러가 발생했습니다.'
          this.snackbar = true
          console.log(error)
        })
    }
  },
  components: {
    'tab-component': TabComponent
  }
}
</script>

<style lang="less" scoped>
</style>
