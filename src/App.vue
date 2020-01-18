<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Home from './components/Home.vue'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    'v-home':Home
  }
}
</script>

<style>

</style>
