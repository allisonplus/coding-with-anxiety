<template>
  <section class="modal">
    <div class="show-info" v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive" ><span>?</span></div>

    <div class="modal-container" v-bind:class="{ active: isActive }">
      <div class="overlay"></div>
      <div class="modal">
        <button class="close-button" v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive"><i class="fa fa-times"></i></button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
        <h5>Created by <a href="http://www.allisontarr.com">Allison Tarr</a>.</h5>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: 'Modal',
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
