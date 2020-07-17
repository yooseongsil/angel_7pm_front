<template>
  <v-main>
    <section class="nes-container is-dark with-title is-left">
      <p class="title">팀빌딩 제출</p>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="teamName" style="color:#fff;">팀명</label>
        <input type="text" id="teamName" v-model="teamName" class="nes-input is-dark" placeholder="오후 7시">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="teamLeaderName" style="color:#fff;">팀장 이름</label>
        <input type="text" id="teamLeaderName" v-model="teamLeaderInfo.name" class="nes-input is-dark" placeholder="김해커">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="teamLeaderEmail" style="color:#fff;">팀장 이메일</label>
        <input type="text" id="teamLeaderEmail" v-model="teamLeaderInfo.email" class="nes-input is-dark" placeholder="your@email">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="teamLeaderRole" style="color:#fff;">팀장 역할</label>
        <input type="text" id="teamLeaderRole" v-model="teamLeaderInfo.role" class="nes-input is-dark" placeholder="기획">
      </div>
      <div v-for="(member, index) in teamInfo"
           :key="`team-member-${index + 1}`"
      >
        <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
          <label :for="`member-name-${index + 1}`" style="color:#fff;">팀원{{index + 1}} 이름</label>
          <input type="text"
                 :id="`member-name-${index + 1}`"
                 v-model="member.name"
                 class="nes-input is-dark"
                 placeholder="나최강"
          >
        </div>
        <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
          <label :for="`member-email-${index + 1}`" style="color:#fff;">팀원{{index + 1}} 이메일</label>
          <input type="text"
                 :id="`member-email-${index + 1}`"
                 v-model="member.email"
                 class="nes-input is-dark"
                 placeholder="your@email.com"
          >
        </div>
        <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
          <label :for="`member-role-${index + 1}`" style="color:#fff;">팀원{{index + 1}} 역할</label>
          <input type="text"
                 :id="`member-role-${index + 1}`"
                 v-model="member.role"
                 class="nes-input is-dark"
                 placeholder="프론트 개발"
          >
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="nes-btn is-primary" @click="submit()">제출하기</button>
      </div>
    </section>
  </v-main>
</template>

<script>
export default {
  name: 'HacksIngMissionTeamBuildingFormPage',
  data: () => ({
    teamName: null,
    teamLeaderName: null,
    teamLeaderInfo: {
      name: '',
      email: '',
      role: ''
    },
    teamInfo: [],
    teamMemberCount: 5,
    isLoaded: false
  }),
  created () {
    this.getTeamMemberCount()
  },
  methods: {
    getTeamMemberCount () {
      const teamMemberCount = 5
      for (let i = 0; i < teamMemberCount; i++) {
        this.teamInfo.push({
          name: '',
          email: '',
          role: ''
        })
      }
    },
    submit () {
      // todo: api 연동
    }
  }
}
</script>

<style scoped>

</style>
