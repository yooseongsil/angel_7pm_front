<template>
  <div id="signUp">
    <!--아이디 입력-->
    <!--title-->
    <v-col cols="12">
      <h1 class="text-h2 white--text mt-12">회원가입</h1>
    </v-col>
    <v-col cols="12">
      <v-text-field
        v-model="email"
        label="이메일"
        filled
        hint="이메일을 입력하세요"
        color="deep-purple accent-1"
      ></v-text-field>
    </v-col>
    <!--비밀번호 입력-->
    <v-col cols="12">
      <v-text-field
        v-model="password"
        label="비밀번호"
        type="password"
        hint="비밀번호를 입력하세요"
        color="deep-purple accent-1"
      ></v-text-field>
    </v-col>
    <!--비밀번호 입력-->
    <v-col cols="12">
      <v-text-field
        v-model="checkPassword"
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
            v-model="name"
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
                v-model="belong"
                label="소속"
                filled
                hint="회사/학교를 입력하세요"
                color="deep-purple accent-1"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="role"
                label="직무"
                filled
                hint="직무를 입력하세요"
                color="deep-purple accent-1"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-alert type="error" v-if="nonUser">
            정보를 모두 입력해주세요
          </v-alert>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-btn block
             class="deep-purple accent-1"
             @click="singIUp"
      >회원가입
      </v-btn>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  data: () => ({
    email: null,
    password: null,
    checkPassword: null,
    belong: null,
    role: null,
    name: null,
    nonUser: false,
    portfolio: null
  }),
  methods: {
    singIUp () {
      this.$http({
        method: 'POST',
        url: '/accounts/sign-up/',
        data: {
          email: this.email,
          name: this.name,
          password: this.password,
          belong: this.belong,
          role: this.role
        }
      }).then(({ data }) => {
        console.log(data)
        if (data.message === 'ok') {
          this.$router.push('/')
        }
      })
        .catch(({ error }) => {
          console.log(error)
          this.nonUser = true
        })
    }
  }
}
</script>
<style scoped lang="less">
  .v-text-field > .v-input__control > .v-input__slot:after {
    color: #BB86FC;
  }
</style>
