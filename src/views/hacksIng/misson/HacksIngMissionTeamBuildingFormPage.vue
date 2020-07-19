<template>
  <v-main>
    <section class="nes-container is-dark with-title is-left">
      <ValidationObserver ref="validObserver">
        <form>
          <p class="title">팀빌딩 제출</p>

          <ValidationProvider v-slot="{ errors, validate }" name="팀 명" rules="required">
            <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline mb-4">
              <label for="teamName" style="color:#fff;">팀명</label>
              <input type="text" id="teamName" v-model="teamName" class="nes-input is-dark mb-2" placeholder="오후 7시">
              <span
                class="is-dark error--text"
                v-html="errors[0]"
              ></span>
            </div>
          </ValidationProvider>

          <section class="nes-container is-dark with-title is-left mb-8">
            <p class="title">팀장</p>

            <ValidationProvider v-slot="{ errors, validate }" name="팀장 이메일" rules="required">
              <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
                <label for="teamLeaderEmail" style="color:#fff;">팀장 이메일</label>
                <input type="text" id="teamLeaderEmail" v-model="teamLeaderInfo.email" class="nes-input is-dark mb-2" placeholder="your@email">
                <span
                  class="is-dark error--text"
                  v-html="errors[0]"
                ></span>
              </div>
            </ValidationProvider>

            <ValidationProvider v-slot="{ errors, validate }" name="팀장 역할" rules="required">
              <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
                <label for="teamLeaderRole" style="color:#fff;">팀장 역할</label>
                <input type="text" id="teamLeaderRole" v-model="teamLeaderInfo.role" class="nes-input is-dark mb-2" placeholder="기획">
                <span
                  class="is-dark error--text"
                  v-html="errors[0]"
                ></span>
              </div>
            </ValidationProvider>
          </section>

          <section
            v-for="(member, index) in teamInfo"
            :key="`team-member-${index + 1}`"
            class="nes-container is-dark with-title is-left mb-8"
          >
            <p class="title">팀원{{index + 1}}</p>
            <ValidationProvider v-slot="{ errors, validate }" :name="`팀원${index + 1} 이메일`" rules="required">
              <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
                <label :for="`member-email-${index + 1}`" style="color:#fff;">팀원{{index + 1}} 이메일</label>
                <input type="text"
                       :id="`member-email-${index + 1}`"
                       v-model="member.email"
                       class="nes-input is-dark mb-2"
                       placeholder="your@email.com"
                >
                <span
                  class="is-dark error--text"
                  v-html="errors[0]"
                ></span>
              </div>
            </ValidationProvider>

            <ValidationProvider v-slot="{ errors, validate }" :name="`팀원${index + 1} 역할`" rules="required">
              <div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
                <label :for="`member-role-${index + 1}`" style="color:#fff;">팀원{{index + 1}} 역할</label>
                <input type="text"
                       :id="`member-role-${index + 1}`"
                       v-model="member.role"
                       class="nes-input is-dark mb-2"
                       placeholder="프론트 개발"
                >
                <span
                  class="is-dark error--text"
                  v-html="errors[0]"
                ></span>
              </div>
            </ValidationProvider>
          </section>

          <div class="text-center">
            <button type="button" class="nes-btn is-primary" @click="validCheck()">제출하기</button>
          </div>
        </form>
      </ValidationObserver>
    </section>

    <Modal :show="showHacksIngModal"
           @close="showHacksIngModal=false"
           :modalTitle="modalTitle"
           :modalText="modalText"
           :buttonText="buttonText"
    />
  </v-main>
</template>

<script>
import Modal from '../../../components/base/hacksIng/Modal'
export default {
  name: 'HacksIngMissionTeamBuildingFormPage',
  components: { Modal },
  data: () => ({
    teamName: null,
    teamLeaderName: null,
    teamLeaderInfo: {
      email: '',
      role: ''
    },
    teamInfo: [],
    teamMemberCount: 5,
    isLoaded: false,
    showHacksIngModal: false,
    modalTitle: '',
    modalText: '',
    buttonText: ''
  }),
  created () {
    this.getTeamMemberCount()
  },
  methods: {
    getTeamMemberCount () {
      const teamMemberCount = 5
      for (let i = 0; i < teamMemberCount; i++) {
        this.teamInfo.push({
          email: '',
          role: ''
        })
      }
    },
    async validCheck () {
      await this.$refs.validObserver.validate().then(isValid => {
        if (isValid) {
          this.submit()
        } else {
          this.modalTitle = '저장 불가'
          this.modalText = '내용을 모두 입력해주세요'
          this.buttonText = '확인'
          this.showHacksIngModal = true
        }
      })
    },
    submit () {
      const data = {
        t_name: this.teamName,
        l_email: this.teamLeaderInfo.email,
        ㅣ_role: this.teamLeaderInfo.role,
        teams: []
      }
      this.teamInfo.forEach(team => {
        data.teams.push({
          email: team.email,
          role: team.role
        })
      })

      this.$http.post(`/hacks/${this.$route.params.id}/team-build/`, (data))
        .then((res) => {
          const data = res.data
          console.log(data)
          if (res.status === 201) {
          }
        })
        .catch(error => {
          console.log(error)
        })

      // todo: /hacks/apply patch mission
    }
  }
}
</script>

<style scoped>

</style>
