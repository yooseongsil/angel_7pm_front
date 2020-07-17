<template>
  <div id="signUp">
    <v-col cols="12">
      <h1 class="text-h2 white--text mt-12">회원정보 수정</h1>
    </v-col>
    <v-col cols="12">
      <v-text-field
        v-model="userInfo.email"
        label="이메일"
        filled
        hint="이름을 입력하세요"
        color="deep-purple accent-1"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-text-field
        v-model="userInfo.password"
        label="비밀번호"
        type="password"
        hint="비밀번호를 입력하세요"
        color="deep-purple accent-1"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-text-field
        v-model="userInfo.checkPassword"
        label="비밀번호 확인"
        type="password"
        hint="비밀번호를 입력하세요"
        color="deep-purple accent-1"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="6" >
          <v-text-field
            v-model="userInfo.name"
            label="이름"
            filled
            hint="이름을 입력하세요"
            color="deep-purple accent-1"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="userInfo.belong"
                label="소속"
                filled
                hint="회사/학교를 입력하세요"
                color="deep-purple accent-1"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="userInfo.role"
                label="직무"
                filled
                hint="직무를 입력하세요"
                color="deep-purple accent-1"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="userInfo.portfolio"
            label="포트폴리오"
            type="text"
            hint="포트폴리오 링크를 입력하세요"
            color="deep-purple accent-1"
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
import axios from 'axios'
export default {
  name: 'SignUpPage',
  data: () => ({
    userInfo: {
      email: null,
      password: null,
      checkPassword: null,
      name: null,
      belong: null,
      role: null,
      portfolio: null
    }
  }),
  created () {
    this.userInfo.name = localStorage.getItem('userName')
    this.userInfo.email = localStorage.getItem('userEmail')
    this.userInfo.belong = localStorage.getItem('userBelong')
    this.userInfo.role = localStorage.getItem('userRole')
  },
  methods: {
    updateProfile () {
      axios({
        method: 'POST',
        url: `${this.$store.state.host}/accounts/sign-up/`,
        data: {
          email: this.userInfo.email,
          name: this.userInfo.name,
          password: this.userInfo.password,
          belong: this.userInfo.belong,
          role: this.userInfo.role,
          portfolio: this.userInfo.portfolio
        }
      }).then(({ data }) => {
        console.log(data)
        if (data.message === 'ok') {
          localStorage.setItem('userportfolio', this.userInfo.portfolio)
        }
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
