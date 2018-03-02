<template>
  <div id="app">
    <Content/>

  </div>
</template>

<script>
import firebase from './firebase.js';
import Content from './components/Content';

export default {
  name: 'App',
  components: {
    Content,
  },
};
</script>

<style lang='scss'>
  @import "./assets/styles/style";
</style>
