<template>
  <div id="mypage">
    <v-row>
      <v-col cols="12">
        <tab-component :iconShow="true" :isMypage="false"></tab-component>
      </v-col>
      <v-col cols="12" class="d-flex flex-row" style="background: #1E1E1E">
        <div>
          <Avatar :email="userInfo.name" class="mb-2"/>
          <p class="text-caption grey--text text--lighten-1 mb-0">{{userInfo.belong}} / {{userInfo.role}}</p>
          <p class="text-h5 mb-0">
            {{ userInfo.name }}
            <span class="text-subtitle-1 yellow--text">(크레딧: {{credit}})
            <i class="nes-icon coin is-small" style="position: relative; top: 3px;"></i>
            </span>
          </p>
          <p class="text-subtitle-2 grey--text mb-0">{{userInfo.email}}</p>
        </div>
      </v-col>
      <v-divider/>
      <v-col cols="12">
        <v-list dense>
          <v-list-item-group>
            <!--menu1-->
            <v-list class="pl-7">
              <v-list-item-content>
                <router-link :to="{name: 'UpdateProfilePage'}">
                  <v-list-item-icon class="float-left ma-0">
                    <v-icon v-text="'mdi-account '" class=" "></v-icon>
                    <v-list-item-title class="text-subtitle-2 float-left ml-3 "
                    >회원정보 수정
                    </v-list-item-title>
                  </v-list-item-icon>
                </router-link>
              </v-list-item-content>
            </v-list>
            <!--menu2-->
            <v-list class="pl-7">
              <v-list-item-content>
                <router-link :to="{name: 'MyHacksListPage'}" class="deep-purple&#45;&#45;text accent-1">
                  <v-list-item-icon class="float-left ma-0">
                    <v-icon v-text="'mdi-clock'" class=" "></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title class="text-subtitle-2 float-left ml-3 ">참여한 해커톤 보기</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list>
            <!--menu3-->
            <v-list class="pl-7">
              <v-list-item-content>
                <a href="https://forms.gle/vykpMXa2sca3CoVA6" target="_blank"
                   class="deep-purple&#45;&#45;text accent-1">
                  <v-list-item-icon class="float-left ma-0">
                    <v-icon v-text="'mdi-flag'" class=" "></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title class="text-subtitle-2 float-left ml-3 ">크레딧 환급 받기</v-list-item-title>
                </a>
              </v-list-item-content>
            </v-list>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import TabComponent from './hacks/TabComponent'
import Avatar from '../components/base/main/Avatar'

export default {
  name: 'Mypage',
  components: { Avatar, TabComponent },
  data: () => ({
    userInfo: {
      id: null,
      belong: null,
      role: null,
      email: null
    },
    credit: 0
  }),
  created () {
    this.userInfo.name = localStorage.getItem('userName')
    this.userInfo.email = localStorage.getItem('userEmail')
    this.userInfo.belong = localStorage.getItem('userBelong')
    this.userInfo.role = localStorage.getItem('userRole')
  },
  // computed(){
  //     isPortfolio{
  //         if(this.userInfo.portfolio===null){
  //             return true;
  //         } else {
  //             return false
  //         }
  //     }
  // },
  methods: {
    getApplyList () {
      axios({
        method: 'GET',
        url: `${this.$store.state.host}/hacks/apply/`
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
<style scoped lang="less">
  #mypage {
    .theme--dark.v-list.v-list--dense {
      background: transparent;
      margin: -8px;

      * {
        color: #BDBDBD;
      }
      .v-list{
        background: transparent;
        &:hover {
          background: rgba(187, 134, 252, 0.08);
          * {
            color: #B388FF;
          }
        }
      }
    }
  }
</style>
