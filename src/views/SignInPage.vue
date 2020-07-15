<template>
  <div>
    kasdhfkjahsdbfh
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
        url: `${this.$store.state.host}/accounts/sing-in/`,
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
