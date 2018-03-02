<template>
  <div id="app">
    <Content/>

  </div>
</template>

<script>
import firebase from 'firebase';
import Content from './components/Content';

export default {
  name: 'App',
  components: {
    Content,
    firebase,
  },
};
</script>

<style lang='scss'>
  @import "./assets/styles/style";
</style>
