<template>
   <div class="dashboard">
    <h1>Dashboard.</h1>

    <!-- <input type="submit" value="Logout" v-on:click="logOut"> -->

   </div>
</template>

<script>
  export default {
    name: 'dashboard',
    data() {
      return {};
    },
    methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#app .dashboard {
    background-color: #272822;
    color: #e5e5e5;
    height: 100vh;
    padding: 40px;
}

h1 {
  margin: 0;
  text-align: center;
}

</style>
