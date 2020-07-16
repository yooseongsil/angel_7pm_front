<template>
  <div id="signUp">
    <!--container-->
    <v-container>
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
          v-model="password"
          label="비밀번호"
          counter
        ></v-text-field>
      </v-col>
      <!--비밀번호 입력-->
      <v-col cols="12">
        <v-text-field
          v-model="checkPassword"
          label="비밀번호 확인"
          counter
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="belong"
              label="소속"
              filled
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="role"
              label="직무"
              filled
            ></v-text-field>
          </v-col>
        </v-row>

      </v-col>
      <v-col cols="12">
        <v-btn block class="deep-purple accent-2"
               >회원가입
        </v-btn>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUpPage',
  data: () => ({
    email: null,
    password: null,
    checkPassword: null,
    belong: null,
    role: null
  }),
  methods: {
    singIUp () {
      axios({
        method: 'POST',
        url: `${this.$store.state.host}/accounts/sign-up/`,
        data: {
          email: this.email,
          name: this.password,
          password: this.password,
          belong: this.belong,
          role: this.role
        }
      }).then(({ data }) => {
        console.log(data)
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  }
}
</script>
