<template>
  <b-list-group>
    <b-list-group-item
    v-for="r in resources" :key="r"
    @click="explore(r)"
    button>
    <Resource :resource_url="r" />
  </b-list-group-item>
</b-list-group>
</template>

<script>
export default {
  name: "Resources",
  props: ["resources"],
  components: {
    'Resource': () => import('@/components/pod/Resource.vue'),
  },
  methods:{
    explore(r){
      let path = {url: r}
      console.log(path)
      this.$explore(path)
    }
  }
}
</script>

<style>

</style>
