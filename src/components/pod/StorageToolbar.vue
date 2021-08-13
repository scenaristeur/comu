<template>
  <div>
    <b-button-toolbar aria-label="Toolbar with button groups and input groups">
      <b-button-group size="sm" class="mr-1" style="width:100%">
        <b-button @click="$explore({url: pod.storage})"><b-icon icon="arrow90deg-up" aria-hidden="true"></b-icon></b-button>
        <b-button @click="$explore({url: parent})"><b-icon icon="arrow-up" aria-hidden="true"></b-icon></b-button>
        <b-button @click="newFile"><b-icon icon="file-earmark-richtext" aria-hidden="true"></b-icon></b-button>
        <b-button @click="newFolder"><b-icon icon="folder-fill" aria-hidden="true"></b-icon></b-button>
        <b-button v-b-modal.bv-modal-profile><b-icon icon="person-circle" aria-hidden="true"></b-icon></b-button>
      </b-button-group>
      <b-button-group>


      </b-button-group>
    </b-button-toolbar>
    <b-form-input v-if="container != null" v-model="container.url" class="text-right" ></b-form-input>
  </div>
</template>

<script>
export default {
  name: "StorageToolbar",
  data(){
    return {
      parent: null
    }
  },
  methods:{
    newFile(){
      var saisie = prompt("Filename :", Date.now())
      console.log(saisie);
      if(saisie !== null && saisie.length > 0){
        //  let dest = this.currentRemoteUrl.endsWith('/') ? this.currentRemoteUrl : this.parent(this.currentRemoteUrl)
        this.$createFile({dest: this.container.url, filename: saisie})
      }
    },
    newFolder(){
      var saisie = prompt("Foldername :", Date.now())
      console.log(saisie);
      if(saisie !== null && saisie.length > 0){
        //  let dest = this.currentRemoteUrl.endsWith('/') ? this.currentRemoteUrl : this.parent(this.currentRemoteUrl)
        this.$createFolder({dest: this.container.url, foldername: saisie})
      }
    }
  },
  watch:{
    container(c){
      if (c.url != this.pod.storage){
        let withoutSlash = c.url.slice(0, -1);
        this.parent = withoutSlash.slice(0, withoutSlash.lastIndexOf('/'))+'/';
      }else{
        this.parent = null
      }
      // ou methode
      // parent(url){
      //   url = url.endsWith('/') ? url.slice(0, -1) : url;
      //   return url.substring( 0, url.lastIndexOf( "/" ) + 1)
      // },
    }
  },
  computed: {
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
