<template>
  <div id="hackApply">
    <v-row>
      <!--title-->
      <v-col cols="12">
        <h1 class="text-h2 white--text mt-12">해커톤을 <br/>만들기</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.count"
          label="data.count"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.next"
          label="data.next"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.previous"
          label="data.previous"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.id"
          label="data.results.id"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.title"
          label="data.results.title"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.intro"
          label="data.results.intro"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.subject"
          label="data.results.subject"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.rule"
          label="data.results.rule"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.img"
          label="data.results.img"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.fee"
          label="data.results.fee"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.status"
          label="data.results.status"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.started_at"
          label="data.results.started_at"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.ended_at"
          label="data.results.ended_at"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.judge_line"
          label="data.results.judge_line"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.judge_day"
          label="data.results.judge_day"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.max_personnel"
          label="data.results.max_personnel"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.team_personnel"
          label="data.results.team_personnel"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.awards_count"
          label="data.results.awards_count"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.awards"
          label="data.results.awards"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.created_at"
          label="data.results.created_at"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.updated_at"
          label="data.results.updated_at"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.chat_url"
          label="data.results.chat_url"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.results.host"
          label="data.results.host"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn block color="#BB86FC"
               @click="createHack()"
        >
          만들기
        </v-btn>
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
        rule: null,
        img: null,
        fee: null,
        status: null,
        started_at: null,
        ended_at: null,
        judge_line: null,
        judge_day: null,
        max_personnel: null,
        team_personnel: null,
        awards_count: null,
        awards: null,
        created_at: null,
        updated_at: null,
        chat_url: null,
        host: null
      }
    }
  }),
  methods: {
    createHack () {
      axios({
        method: 'POST',
        url: `${this.$store.state.host}/hacks/`,
        data: this.data
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
