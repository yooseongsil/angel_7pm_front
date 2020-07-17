<template>
  <div id="hackApply">
    <v-row>
      <!--title-->
      <v-col cols="12">
        <h1 class="text-h2 white--text mt-12">해커톤<br/>만들기</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.title"
          label="해커톤 이름"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.intro"
          label="해커톤 소개"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.subject"
          label="해커톤 주제"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.rule"
          label="해커톤 규칙"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.img"
          label="해커톤 썸네일"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.fee"
          label="참가 비용"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <header>진행상황</header>
        <v-radio-group v-model="data.status" row>
          <v-radio label="작성" value="w"></v-radio>
          <v-radio label="예정" value="p"></v-radio>
          <v-radio label="진행" value="i"></v-radio>
          <v-radio label="완료" value="c"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.started_at"
          label="해커톤 시작일"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.ended_at"
          label="해커톤 예정일"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.judge_line"
          label="해커톤 판단 기준"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.judge_day"
          label="해커톤이 끝나고 며칠 후 까지 심사할 지 1은 1일"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.max_personnel"
          label="최대 참가 인원"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.team_personnel"
          label="팀당 권장 인원"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.awards_count"
          label="상의 갯수"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.awards"
          label="상을 받는 팀(팀의 PK를넘겨주세요 ex) 1,2,3,4 )"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.chat_url"
          label="슬랙 URL"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="data.host"
          label="개최자"
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
      chat_url: null,
      host: null
    }
  }),
  methods: {
    createHack () {
      axios({
        method: 'POST',
        url: `${this.$store.state.host}/hacks/`,
        data: this.data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          token: localStorage.getItem('token')
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
