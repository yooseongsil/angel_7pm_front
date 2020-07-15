<template>
  <v-main>
    <div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="teamName" style="color:#fff;">팀명</label>
        <input type="text" id="teamName" v-model="teamName" class="nes-input is-dark" placeholder="팀 이름">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="teamLeaderName" style="color:#fff;">팀장 이름</label>
        <input type="text" id="teamLeaderName" v-model="teamLeaderInfo.name" class="nes-input is-dark" placeholder="팀장 이름">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="teamLeaderEmail" style="color:#fff;">팀장 이메일</label>
        <input type="text" id="teamLeaderEmail" v-model="teamLeaderInfo.email" class="nes-input is-dark" placeholder="팀장 이메일">
      </div>
      <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
        <label for="teamLeaderRole" style="color:#fff;">팀장 역할</label>
        <input type="text" id="teamLeaderRole" v-model="teamLeaderInfo.role" class="nes-input is-dark" placeholder="팀장 역할">
      </div>
<!--      <template v-if="isLoaded">-->
<!--        <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline"-->
<!--             v-for="(member, index) in 5-1"-->
<!--             :key="`team-member-${index}`"-->
<!--        >-->
<!--          <label :for="`member-name-${index}`" style="color:#fff;">팀원{{index + 1}} 이름</label>-->
<!--          <input type="text" :id="`member-name-${index}`" v-model="member[index]" class="nes-input is-dark" :placeholder="`팀원${index + 1} 이름`">-->
<!--        </div>-->
<!--      </template>-->
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'HacksMissionTeamFormPage',
  data: () => ({
    teamName: null,
    teamLeaderName: null,
    teamLeaderInfo: {
      name: '',
      email: '',
      role: ''
    },
    teamInfo: [],
    isLoaded: false
  }),
  async created () {
    await this.getTeamMemberCount()
  },
  methods: {
    getTeamMemberCount () {
      const teamMemberCount = 5
      for (let i = 0; i < teamMemberCount; i++) {
        this.teamInfo.push({
          name: null,
          email: null,
          role: null
        })
      }
      this.isLoaded = true
    }
  }
}
</script>

<style scoped>

</style>
