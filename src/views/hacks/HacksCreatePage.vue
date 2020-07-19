<template>
  <div id="hackApply">
    <tab-component :items="[]" :showHistory="true"></tab-component>
    <v-row>
      <!--title-->
      <v-col cols="12" style="position: relative">
        <h1 class="text-h3 white--text mt-12">해커톤을<br/>개최하세요</h1>
        <img :src="require('../../assets/images/illust/illust_hackVote_1.svg')" alt="" class="list_title_img">
      </v-col>
      <v-col cols="12">
        <ValidationObserver ref="validObserver">
          <form>
            <ValidationProvider v-slot="{ errors, validate }" name="해커톤 이름" rules="required">
              <v-text-field
                v-model="data.title"
                label="해커톤 이름"
                hint="해커톤의 이름을 지어주세요"
                color="deep-purple accent-1"
                filled
                :error-messages="errors"
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="해커톤 소개" rules="required">
              <v-textarea
                v-model="data.intro"
                label="해커톤 소개"
                hint="무엇을 하는 해커톤인가요? 소개말을 적어주세요"
                color="deep-purple accent-1"
                filled
                :error-messages="errors"
                required
              ></v-textarea>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="해커톤 주제" rules="required">
              <v-textarea
                v-model="data.subject"
                label="해커톤 주제"
                hint="어떤 주제로 해커톤을 개최할 것인지 알려주세요"
                color="deep-purple accent-1"
                filled
                :error-messages="errors"
                required
              ></v-textarea>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="해커톤 규칙" rules="required">
              <v-textarea
                v-model="data.rule"
                label="해커톤 규칙"
                hint="해커톤 참가자들이 지켜야 할 규칙을 알려주세요"
                color="deep-purple accent-1"
                filled
                :error-messages="errors"
                required
              ></v-textarea>
            </ValidationProvider>
            <!--      <v-col cols="12">-->
            <!--        <v-text-field-->
            <!--          v-model="data.fee"-->
            <!--          label="참가비"-->
            <!--        ></v-text-field>-->
            <!--      </v-col>-->
            <!--      <v-col cols="12">-->
            <!--        <header>진행상황</header>-->
            <!--        <v-radio-group v-model="data.status" row>-->
            <!--          <v-radio label="작성" value="w"></v-radio>-->
            <!--          <v-radio label="예정" value="p"></v-radio>-->
            <!--          <v-radio label="진행" value="i"></v-radio>-->
            <!--          <v-radio label="완료" value="c"></v-radio>-->
            <!--        </v-radio-group>-->
            <!--      </v-col>-->
            <v-menu
              v-model="startDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <ValidationProvider v-slot="{ errors }" name="해커톤 시작일" rules="required">
                  <v-text-field
                    v-model="data.started_at"
                    label="해커톤 시작일(금요일 오후 7시)"
                    hint="해커톤은 금요일 오후 7시에 시작됩니다"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    color="deep-purple accent-1"
                    filled
                    :error-messages="errors"
                    required
                  />
                </ValidationProvider>
              </template>
              <v-date-picker
                v-model="data.started_at"
                @input="startDateMenu = false"
                :allowed-dates="allowedDates"
                color="deep-purple accent-1"
              />
            </v-menu>

            <!--      <v-col cols="12">-->
            <!--        <v-text-field-->
            <!--          v-model="data.ended_at"-->
            <!--          label="해커톤 예정일(YYYY-MM-DD)"-->
            <!--        ></v-text-field>-->
            <!--      </v-col>-->
            <!--      <v-col cols="12">-->
            <!--        <v-text-field-->
            <!--          v-model="data.judge_line"-->
            <!--          label="해커톤 판단 기준"-->
            <!--        ></v-text-field>-->
            <!--      </v-col>-->
            <!--      <v-col cols="12">-->
            <!--        <v-text-field-->
            <!--          v-model="data.judge_day"-->
            <!--          label="해커톤이 끝나고 며칠 후 까지 심사할 지 1은 1일(숫자)"-->
            <!--        ></v-text-field>-->
            <!--      </v-col>-->
            <ValidationProvider v-slot="{ errors }" name="참가 인원" rules="required|min_value:25|max_value:50">
              <v-text-field
                v-model="data.max_personnel"
                label="참가 인원(25명~50명)"
                color="deep-purple accent-1"
                filled
                :error-messages="errors"
                required
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="참가 인원" rules="required">
              <v-text-field
                v-model="data.team_personnel"
                label="팀 인원(5명)"
                readonly
                color="deep-purple accent-1"
                hint="팀 인원은 5명으로 고정됩니다"
                filled
                :error-messages="errors"
                required
              />
            </ValidationProvider>
            <!--      <v-col cols="12">-->
            <!--        <v-text-field-->
            <!--          v-model="data.awards_count"-->
            <!--          label="상의 갯수"-->
            <!--        ></v-text-field>-->
            <!--      </v-col>-->
            <!--      <v-col cols="12">-->
            <!--        <v-text-field-->
            <!--          v-model="data.awards"-->
            <!--          label="상을 받는 팀(팀의 PK를넘겨주세요 ex) 1,2,3,4 )"-->
            <!--        ></v-text-field>-->
            <!--      </v-col>-->
            <ValidationProvider v-slot="{ errors }" name="슬랙 URL" rules="required">
              <v-text-field
                v-model="data.chat_url"
                label="슬랙 URL"
                color="deep-purple accent-1"
                filled
                :error-messages="errors"
                required
              />
            </ValidationProvider>
            <v-btn
              block
              color="#BB86FC"
              @click="validCheck"
            >
              만들기
            </v-btn>
          </form>
        </ValidationObserver>
      </v-col>
    </v-row>

    <Modal
      :show="showModal"
      @close="showModal=false"
      :modalTitle="modalTitle"
      :modalText="modalText"
      :modalButtonText="modalButtonText"
      :function="goMyHacksList"
    />
  </div>
</template>

<script>
import TabComponent from './TabComponent'
import moment from 'moment'
import Modal from '../../components/base/main/Modal'

export default {
  name: 'HacksCreatePage',
  data: () => ({
    data: {
      id: null,
      title: null,
      intro: null,
      subject: null,
      rule: null,
      fee: null,
      status: 'p',
      started_at: null,
      ended_at: null,
      judge_line: null,
      judge_day: null,
      max_personnel: 50,
      team_personnel: null,
      awards_count: null,
      awards: null,
      chat_url: null,
      host: null
    },
    startDateMenu: false,
    showModal: false,
    modalTitle: '',
    modalText: '',
    modalButtonText: ''
  }),
  methods: {
    async validCheck () {
      await this.$refs.validObserver.validate().then(isValid => {
        if (isValid) {
          this.createHack()
        }
      })
    },
    async createHack () {
      await this.$http({
        method: 'POST',
        url: '/hacks/',
        data: this.data
      }).then((res) => {
        const data = res.data
        console.log(data)
        if (res.status === 201) {
          this.modalTitle = '개최 완료'
          this.modalText = '해커톤을 개최하신 것을 축하드려요!'
          this.modalButtonText = '개최한 해커톤 보러 가기'
          this.showModal = true
        }
      })
        .catch(({ error }) => {
          console.log(error)
        })
    },
    allowedDates (value) {
      return moment(value).format('ddd') === '금' && moment(value).isAfter()
    },
    goMyHacksList () {
      this.$router.push('/mypage/hacks/list')
    }
  },
  components: {
    Modal,
    'tab-component': TabComponent
  }
}
</script>
