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
        url: '/accounts/sing-in',
        data: {
          email: 'paikend@gmail.com',
          password: 'admin12345'
        }
      }).then(function (response) {
        console.log(response)
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
