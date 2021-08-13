<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
    'Console': () => import('@/components/Console.vue'),

  },
}
</script>
