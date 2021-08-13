<template>
  <div v-if="pod!= null">
    ST
    {{pod}}

    <div v-if="pod.storage !=null">
      Root : <b-button @click="explore(pod.storage)">{{pod.storage}}</b-button> <hr>
      Container : {{ container}}
      <Resources v-if="container != null" :resources="container.resources" />
    </div>
    <div v-else>

      <b-container fluid>
        <b-row class="my-1">
          <b-col sm="5">
            <label for="candidate">It seems that your profile don't have a <code> solid:storage </code> configured,<br>
              you can configure it with :</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="candidate" v-model="storageCandidate"></b-form-input>
            </b-col>
          </b-row>
          <b-button @click="configureStorage">Configure</b-button>
        </b-container>

      </div>



    </div>
  </template>

  <script>
  import { WS } from "@inrupt/vocab-solid-common";

  export default {
    name: "Storage",
    components: {
      'Resources': () => import('@/components/pod/Resources.vue'),
    },
    data(){
      return {
        storageCandidate: ""
      }
    },
    methods:{
      explore(r){
        let path = {url: r}
        console.log(path)
        this.$explore(path)
      },
      configureStorage(){
        console.log(this.storageCandidate)
        this.$setUrl(this.pod.webId, WS.storage, this.storageCandidate, )
      }
    },
    watch: {
      pod(pod){
        if(pod != null){
          if(pod.storage == null){
            this.storageCandidate = pod.webId.split('profile')[0]
          }else
          {
            let path = {url:pod.storage}
            this.$explore(path)
          }
        }else{
          this.container = null
        }
      }
    },
    computed: {
      action: {
        get () { return this.$store.state.app.action},
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
      container: {
        get () { return this.$store.state.app.container},
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
      // session: {
      //   get () { return this.$store.state.session.session},
      //   set (/*value*/) { /*this.updateTodo(value)*/ }
      // },
      pod: {
        get () { return this.$store.state.session.pod},
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
    }
  }
  </script>

  <style>

  </style>
