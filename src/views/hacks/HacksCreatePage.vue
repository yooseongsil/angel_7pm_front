<template>
  <div id="hackApply">
    <v-row>
      <!--title-->
      <v-col cols="12">
        <h1 class="text-h2 white--text mt-12">해커톤을 <br/>만들기</h1>
      </v-col>
      <v-col cols="12">

      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HacksCreatePage',
  data: () => ({
    data: {
      count: null,
      next: null,
      previous: null,
      results: {
        id: null,
        title: null,
        intro: null,
        subject: null,
        rule: null
      }
    }
  }),
  methods: {
    getList () {
      axios({
        method: 'POST',
        url: `${this.$store.state.host}/hacks/`
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
