<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
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
