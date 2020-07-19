<template>
  <div id="signUp">
    <tab-component items=""
                   :showHistory="true"
                   :isMypage="false"
    />
    <!--아이디 입력-->
    <!--title-->
    <v-col cols="12" style="position: relative">
      <h1 class="text-h3 white--text mt-12">회원가입</h1>
      <img :src="require('../assets/images/illust/illust_hacksList.svg')" alt="" class="list_title_img">
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
        filled
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
        filled
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
import TabComponent from './hacks/TabComponent'

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
      }).then((res) => {
        // const data = res.data
        // console.log(data)
        if (res.status === 201) {
          this.$router.push('/signIn')
        }
      })
        .catch(({ error }) => {
          console.log(error)
          this.nonUser = true
        })
    }
  },
  components: {
    'tab-component': TabComponent
  }
}
</script>
<style scoped lang="less">
  .v-text-field > .v-input__control > .v-input__slot:after {
    color: #BB86FC;
  }
</style>
