<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Storage />
    <LoginButton />
    <LoginModal />
    <Console />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    'HelloWorld': () => import('@/components/HelloWorld.vue'),
    'LoginButton': () => import('@/components/session/LoginButton.vue'),
    'LoginModal': () => import('@/components/session/LoginModal.vue'),
    'Storage': () => import('@/components/pod/Storage.vue'),
    'Console': () => import('@/components/Console.vue'),

  },
}
</script>
