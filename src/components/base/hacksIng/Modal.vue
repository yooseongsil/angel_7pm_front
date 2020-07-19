<template>
  <dialog class="nes-dialog is-dark ma-auto" id="dialog-dark">
    <form method="dialog">
      <p class="title">{{modalTitle}}</p>
      <p v-html="modalText"></p>
      <menu class="dialog-menu text-center">
        <button class="nes-btn" @click="close()">{{buttonText}}</button>
      </menu>
    </form>
  </dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: ['show', 'modalTitle', 'modalText', 'buttonText'],
  watch: {
    show () {
      if (this.show) {
        document.getElementById('dialog-dark').showModal()
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
  @media (max-width: 480px) {
    .nes-dialog.is-dark {
      width: calc(100vw - 30px);
    }
  }
</style>
