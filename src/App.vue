<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase';
import VueFire from 'vuefire';
import Content from './components/Content';

export default {
  name: 'App',
  components: {
    Content,
    firebase,
    VueFire,
  },
};
</script>

<style lang='scss'>
  @import "./assets/styles/style";
</style>
