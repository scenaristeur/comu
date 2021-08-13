<template>
  <b-button @click="login" variant="success">Login</b-button>
</template>

<script>
export default {
  name:"LoginButton",
  methods: {
    login(){
      this.$store.commit('app/setAction', "provider")
    }
  }
}
</script>

<style>

</style>
