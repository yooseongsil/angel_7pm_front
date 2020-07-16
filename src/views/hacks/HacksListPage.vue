<template>
  <div id="hackLists">
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">Unlimited music now</v-card-title>
        <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
        <v-card-actions>
          <v-btn text>Listen Now</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HacksListPage',
  data: () => ({
    count: null,
    next: null,
    previous: null,
    results: null
  }),
  methods: {
    getList () {
      axios({
        method: 'GET',
        url: `${this.$store.state.host}/hacks/`
      }).then(({ data }) => {
        console.log(data)
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getList()
  }
}
</script>
