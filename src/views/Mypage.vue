<template>
  <v-main>
    <v-row>
      <v-col cols="12">
        <tab-component  :iconShow="true"></tab-component>
      </v-col>
      <v-col cols="12" class="d-flex flex-row" style="background: #1E1E1E">
        <div>
          <Avatar email="test@test.com" class="mb-2" />
          <div>
            {{ userInfo.id }}
          </div>
          <div>
            크레딧: {{ credit }}원
          </div>
        </div>
      </v-col>
      <v-divider />
      <v-col cols="12">
        <v-list class="pl-4 mb-4">
          <v-list-item-content>
            <router-link :to="{name: 'UpdateProfilePage'}" class="deep-purple--text accent-1">
              <v-list-item-title class="headline">회원정보 수정</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list>
        <v-list class="pl-4 mb-4">
          <v-list-item-content>
            <router-link :to="{name: 'MyHacksListPage'}" class="deep-purple--text accent-1">
              <v-list-item-title class="headline">참여한 해커톤 보기</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list>
        <v-list class="pl-4">
          <v-list-item-content>
            <a href="https://forms.gle/vykpMXa2sca3CoVA6" target="_blank" class="deep-purple--text accent-1">
              <v-list-item-title class="headline">크레딧 환급 받기</v-list-item-title>
            </a>
          </v-list-item-content>
        </v-list>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import TabComponent from './hacks/TabComponent'
import Avatar from '../components/base/main/Avatar'
export default {
  name: 'Mypage',
  components: { Avatar, TabComponent },
  data: () => ({
    userInfo: {},
    credit: 0
  }),
  created () {
    this.userInfo = localStorage.getItem('userInfo')
    console.log(this.userInfo)
  }
}
</script>
