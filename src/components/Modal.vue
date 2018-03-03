<template>
  <section class="modal">
    <div class="show-info" v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive" ><span>?</span></div>

    <div class="modal-container" v-bind:class="{ active: isActive }">
      <div class="overlay"></div>
      <div class="modal">
        <button class="close-button" v-bind:class="{ active: isActive }" v-on:click="closeModal" @keyup.esc="closeModal"><i class="fa fa-times"></i></button>
        <h3>Resources</h3>
        <ul class="resource-list">
          <li><a href="https://www.crisistextline.org/">Crisis Text Line</a></li>
          <li><a href="https://www.if-me.org/">Crisis Text Line</a></li>
          <li><a href="https://www.imalive.org/">I'm Alive</a></li>
          <li><a href="https://osmihelp.org/">Open Source Mental Illness</a></li>
        </ul>
        <h5>Created with feels by <a href="http://www.allisontarr.com">Allison Tarr</a>.</h5>
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
  created() {
    window.addEventListener('keyup', this.closeModal);
  },
  methods: {
    closeModal() {
      if (this.isActive) {
        this.isActive = !this.isActive;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
