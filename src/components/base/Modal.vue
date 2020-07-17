<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
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
            @click="close()"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'Modal',
  props: ['dialog', 'modalTitle', 'modalText'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
