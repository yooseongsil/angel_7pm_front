<template>
  <div id="hackLists">
    <v-row>
      <!--title-->
      <v-col cols="12">
        <h1 class="text-h2 white--text mt-12">해커톤을 <br/>선택하세요</h1>
      </v-col>
      <v-col cols="12" :md="4"
             v-for="(list,index) in hackLists" :key="'result-'+index">
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4 teal--text accent-3">모인 금액: 123,456,789원</div>
              <v-list-item-title class="headline mb-1">{{list.results.title}}</v-list-item-title>
              <v-list-item-subtitle>{{list.results.subject}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <span>{{list.results.started_at}}</span>
            <v-row
              align="center"
              justify="end"
            >
            <v-btn text class="deep-purple--text accent-1">상세보기</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HacksListPage',
  data: () => ({
    hackLists: []
  }),
  methods: {
    getList () {
      axios({
        method: 'GET',
        url: `${this.$store.state.host}/hacks/`
      }).then(({ data }) => {
        console.log(data)
        this.count = data.count
        this.next = data.next
        this.previous = data.previous
        this.results = data.results
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  },
  created () {
    // this.getList();
    this.hackLists = [{
      count: 0,
      next: 'test0',
      previous: 'test0',
      results: {
        id: 0,
        title: 'test0',
        intro: 'test0 intro',
        subject: 'test0 subject',
        rule: 'test0',
        img: 'test0',
        fee: 'test0',
        status: 'test0',
        Enum: [0, 1, 2, 3],
        ended_at: '2020.20.20',
        judge_line: '2020.220220',
        judge_day: 20,
        max_personnel: 201,
        team_personnel: 5,
        awards_count: 202,
        awards: 'test000',
        started_at: '2020.20.20',
        created_at: '2020.20.20',
        updated_at: '2020.200.200',
        chat_url: 'test0.test.test'
      }
    }]
  }
}
</script>
