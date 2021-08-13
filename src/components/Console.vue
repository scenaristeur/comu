<template>
  <div>
    action: {{ action }}<br>
    session: {{session}}<br>
    session: {{pod}}<br>
  </div>
</template>

<script>
export default {
  name: "Console",
  computed: {
    action: {
      get () { return this.$store.state.app.action},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    session: {
      get () { return this.$store.state.session.session},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    pod: {
      get () { return this.$store.state.session.pod},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
