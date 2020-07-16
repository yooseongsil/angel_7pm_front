<template>
  <div id="signIn">
      <v-row>
        <!--title-->
        <v-col cols="12">
          <h1 class="text-h2 white--text mt-12">가슴을 울리는 vp</h1>
        </v-col>
        <!--아이디 입력-->
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="이메일"
            filled
            hint="이메일을 입력하세요"
          ></v-text-field>

        </v-col>
        <!--비밀번호 입력-->
        <v-col cols="12">
          <v-text-field
            type="password"
            v-model="password"
            label="비밀번호"
            counter
            hint="비밀번호를 입력하세요"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn block
                 @click="singIn" color="#BB86FC">로그인
          </v-btn>
          <v-btn outlined block
                 class="mt-3" color="#BB86FC"
          onclick="window.location.href = 'signup'">회원가입</v-btn>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignInPage',
  data: () => ({
    email: null,
    password: null,
    userInfo: {}
  }),
  methods: {
    singIn () {
      axios({
        method: 'POST',
        url: `${this.$store.state.host}/accounts/sign-in/`,
        data: {
          email: this.email,
          password: this.password
        }
      }).then(({ data }) => {
        console.log(data)
        document.cookie = `accessToken=${data.token}`
        axios.defaults.headers.common['x-access-token'] = data.token
        this.userInfo = data
        this.$store.state.userInfo = this.userInfo
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="less" scoped>
 #signIn {
   .v-text-field > .v-input__control > .v-input__slot:after {
     color: #BB86FC;
   }
 }
</style>
