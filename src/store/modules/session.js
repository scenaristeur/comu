//import Vue from 'vue';
const state = () => ({
  session: null,
  pod: null,
  //    action: null
  // url : "",
  // // messages: [],
  // gameContainer: null,
  // game: null,
  // networkUrl: null
})

const actions = {
  // explore(context, url){
  //   context.commit('setUrl', url)
  //   console.log(url)
  //   let path = {url: url, subscribe: true}
  //   Vue.prototype.$explore(path)
  // }
}

const mutations = {
  setSession(state, s){
    state.session = s
  },
  setPod(state,p){
    console.log("setPod",p)
    state.pod = p
  },
  // setUrl(state, url){
  //   console.log("url", url)
  //   state.url = url
  // },
  // setNetworkUrl(state, url){
  //   state.networkUrl = url
  // },

  // newMessage(state,m){
  // //  console.log(m)
  //   state.messages.push(m)
  // },
  // setGameContainer(state, c){
  //   state.gameContainer = c
  // },
  // setGame(state, g){
  //   state.game = g
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
