<template>
  <div id="hackApply">
    <v-row>
      <!--title-->
      <v-col cols="12">
        <h1 class="text-h2 white--text mt-12">해커톤을 <br/>선택하세요</h1>
      </v-col>
      <v-col cols="12">

      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HacksApplyPage',
  data: () => ({

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
