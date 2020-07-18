<template>
  <v-main>
    <v-col cols="12">
      <h1 class="text-h2 white--text mt-12">해커톤 신청</h1>
    </v-col>
    <v-col cols="12">
      <ValidationObserver ref="validObserver">
        <form>
          <ValidationProvider v-slot="{ errors, validate }" name="이메일" rules="required">
            <v-text-field
              v-model="email"
              label="이메일"
              filled
              hint="이메일을 입력하세요"
              color="deep-purple accent-1"
              :error-messages="errors"
              required
            />
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors, validate }" name="이름" rules="required">
            <v-text-field
              v-model="name"
              label="이름"
              filled
              hint="이름을 입력하세요"
              color="deep-purple accent-1"
              :error-messages="errors"
              required
            ></v-text-field>
          </ValidationProvider>

          <v-col cols="12" class="pa-0">
            <v-row>
              <v-col cols="6" class="pb-0">
                <ValidationProvider v-slot="{ errors, validate }" name="소속" rules="required">
                  <v-text-field
                    v-model="belong"
                    label="소속"
                    filled
                    hint="회사/학교를 입력하세요"
                    color="deep-purple accent-1"
                    :error-messages="errors"
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="6" class="pb-0">
                <ValidationProvider v-slot="{ errors, validate }" name="직무" rules="required">
                  <v-text-field
                    v-model="role"
                    label="직무"
                    filled
                    hint="직무를 입력하세요"
                    color="deep-purple accent-1"
                    :error-messages="errors"
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <ValidationProvider v-slot="{ errors, validate }" name="참가비" rules="required|min_value:10000|max_value:100000">
              <v-text-field
                v-model="fee"
                label="참가비(최소 1만원 ~ 최대 10만원)"
                filled
                hint="참가비를 입력하세요"
                color="deep-purple accent-1"
                :error-messages="errors"
                required
              ></v-text-field>
            </ValidationProvider>
            <v-btn block color="#BB86FC"
                   @click="validCheck()"
            >
              신청하기
            </v-btn>
          </v-col>
        </form>
      </ValidationObserver>
    </v-col>
  </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HacksApplyPage',
  data: () => ({
    email: null,
    name: null,
    belong: null,
    role: null,
    fee: 10000
  }),
  created () {
    const userInfo = this.$store.state.userInfo

    this.email = userInfo.id
    this.name = userInfo.name
    this.belong = userInfo.belong
    this.role = userInfo.role
  },
  methods: {
    async validCheck () {
      await this.$refs.validObserver.validate().then(isValid => {
        if (isValid) {
          this.applyHacks()
        }
      })
    },
    applyHacks () {
      axios({
        method: 'POST',
        url: `${this.$store.state.host}/hacks/apply/`,
        data: {
          is_leader: false,
          is_paid: false,
          is_joined: true,
          mission_level: '',
          role: `${this.belong}/${this.role}`,
          hacks: this.$route.params.id,
          team: 0,
          user: this.userInfo.id
        }
      }).then(({ data }) => {
        console.log(data)
        this.count = data.count
        this.hackLists = data.results
      })
        .catch(({ error }) => {
          console.log(error)
        })
    }
  },
  computed: {
    userInfo () {
      return this.$store.getters.getUserInfo
    }
  }
}
</script>

<style scoped>

</style>
