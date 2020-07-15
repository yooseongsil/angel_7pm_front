<template>
  <div>
    <v-col cols="12" sm="6" md="3">
      <v-text-field
        label="Filled"
        filled
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
    </v-col>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignInPage',
  data: () => ({
    email: null,
    password: null
  }),
  created () {
    this.singIn()
  },
  methods: {
    singIn () {
      axios({
        method: 'POST',
        url: `${this.$store.state.host}/accounts/sign-in/`,
        data: {
          email: 'test@test.com',
          password: 'admin12345'
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
