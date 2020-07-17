<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="caption mb-0 teal--text accent-3">모인 금액: {{fee}}원</div>
        <v-list-item-title class="headline">{{title}}</v-list-item-title>
        <v-list-item-subtitle>
          {{subTitle}}
          <span class="text--lighten-5 text--disabled caption">{{content}}</span>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img :src="hacksImg"/>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <span class="caption pl-2">{{captionText}}</span>
      <v-row
        align="center"
        justify="end"
      >
        <v-btn text class="deep-purple--text accent-1"
               @click="goDetail()"
        >
          {{ buttonText }}
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: ['fee', 'title', 'subTitle', 'content', 'captionText', 'buttonText', 'route'],
  computed: {
    hacksImg () {
      const max = 10
      const randomNo = Math.floor(Math.random() * (max + 1))
      return require(`../../assets/images/thumbnail/thumbnail_hacks_${randomNo}.jpg`)
    }
  },
  methods: {
    goDetail () {
      this.$router.push(this.route)
    }
  }
}
</script>
