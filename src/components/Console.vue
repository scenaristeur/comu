<template>
  <div v-if="debug==true">
    <h1>Console</h1>
    pod: {{pod}}<hr>
    action: {{ action }}<hr>
    session: {{session}}<hr>

  </div>
</template>

<script>
export default {
  name: "Console",
  data(){
    return{
      debug : true
    }
  },
  computed: {
    container: {
      get () { return this.$store.state.app.container},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
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
