<template>
  <section class="nes-container is-dark with-title is-left">
    <p class="title mission-title">{{todosTitle}}</p>
    <div v-for="(todo, index) in todos" :key="`${todosTitle}-${index}`">
      <div style="padding: 1rem 0;">
        <label>
          <input type="checkbox" class="nes-checkbox is-dark" checked disabled />
          <span>{{todo.text}}</span>
        </label>
      </div>
      <div class="lists">
        <ul class="nes-list is-circle">
          <template v-for="(description, index) in todo.descriptionList">
            <li :key="`${todosTitle}-des-${index}`">{{description}}</li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TodosComponent',
  props: ['todosTitle', 'todos']
}
</script>

<style scoped>
  .mission-title {
    margin: -2.2rem 0 1rem !important;
  }
</style>
