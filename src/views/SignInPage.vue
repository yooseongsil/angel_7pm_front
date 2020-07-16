<template>
  <div id="signIn">
      <v-row>
        <!--아이디 입력-->
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="이메일"
            filled
          ></v-text-field>
        </v-col>
        <!--비밀번호 입력-->
        <v-col cols="12">
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="password"
            label="비밀번호"
            counter
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn block class="deep-purple accent-2"
                 @click="singIn">로그인
          </v-btn>
          <v-btn outlined block class="mt-3">회원가입</v-btn>
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
    show: false
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

 }
</style>
