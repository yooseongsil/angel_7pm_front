<template>
    <v-main>
      <v-col cols="12">
        <h1 class="text-h2 white--text mt-12">해커톤 신청</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="email"
          label="이메일"
          filled
          hint="이메일을 입력하세요"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="6" >
            <v-text-field
              v-model="name"
              label="이름"
              filled
              hint="이름을 입력하세요"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="belong"
                  label="소속"
                  filled
                  hint="회사/학교를 입력하세요"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="role"
                  label="직무"
                  filled
                  hint="직무를 입력하세요"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="fee"
          label="참가비(최소 1만원 ~ 최대 10만원)"
          filled
          hint="참가비를 입력하세요"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-btn block color="#BB86FC"
               @click="applyHacks()"
        >
          신청하기
        </v-btn>
      </v-col>
    </v-main>
</template>

<script>
export default {
  name: 'HacksApplyPage',
  data: () => ({
    email: null,
    name: null,
    belong: null,
    role: null,
    fee: 10000
  }),
  methods: {
    applyHacks () {

    }
  }
}
</script>

<style scoped>

</style>
