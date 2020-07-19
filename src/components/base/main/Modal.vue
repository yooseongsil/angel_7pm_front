<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">{{modalTitle}}</v-card-title>

        <v-card-text v-html="modalText"></v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="gray"
            text
            @click="close()"
          >
            취소
          </v-btn>

          <v-btn
            color="deep-purple accent-1"
            text
            @click="callbackFunc()"
          >
            {{modalButtonText}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
    modalTitle: String,
    modalText: String,
    modalButtonText: {
      type: String,
      default: '확인'
    },
    function: {
      type: Function
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    callbackFunc () {
      if (this.function) {
        this.function()
      } else {
        this.close()
      }
    }
  }
}
</script>

<style scoped>

</style>
