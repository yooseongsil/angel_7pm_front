<template>
  <div id="signUp">
    <v-col cols="12">
      <h1 class="text-h2 white--text mt-12">회원정보 수정</h1>
    </v-col>
    <v-col cols="12">
      <v-text-field
        v-model="email"
        label="이름"
        filled
        disabled
        hint="이름을 입력하세요"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-text-field
        v-model="password"
        label="비밀번호"
        type="password"
        counter
        hint="비밀번호를 입력하세요"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-text-field
        v-model="checkPassword"
        label="비밀번호 확인"
        type="password"
        counter
        hint="비밀번호를 입력하세요"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="belong"
                label="소속"
                filled
                hint="회사/학교를 입력하세요"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="role"
                label="직무"
                filled
                hint="직무를 입력하세요"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="portfolio"
            label="포트폴리오"
            type="text"
            counter
            hint="포트폴리오 링크를 입력하세요"
          ></v-text-field>
        </v-col>
      </v-row>

    </v-col>
    <v-col cols="12">
      <v-btn block color="#BB86FC"
             @click="updateProfile()"
      >
        저장하기
      </v-btn>
    </v-col>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'SignUpPage',
  data: () => ({
    email: null,
    password: null,
    checkPassword: null,
    belong: null,
    role: null,
    portfolio: null
  }),
  methods: {
    updateProfile () {
      // axios({
      //   method: 'POST',
      //   url: `${this.$store.state.host}/accounts/sign-up/`,
      //   data: {
      //     email: this.email,
      //     name: this.password,
      //     password: this.password,
      //     belong: this.belong,
      //     role: this.role,
      //     portfolio: this.portfolio
      //   }
      // }).then(({ data }) => {
      //   console.log(data)
      //   if (data.message === 'ok') {
      //     window.location.href = 'signin'
      //   }
      // })
      //   .catch(({ error }) => {
      //     console.log(error)
      //   })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
