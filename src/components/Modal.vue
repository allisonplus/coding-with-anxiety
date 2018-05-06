<template>
  <section class="modal">
    <div class="show-info" v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive" ><span>?</span></div>

    <div class="modal-container" v-bind:class="{ active: isActive }">
      <div class="overlay"></div>
      <div class="modal">
        <button class="close-button" v-bind:class="{ active: isActive }" v-on:click="closeModal" @keyup.esc="closeModal"><i class="fa fa-times"></i></button>
        <h3>Resources</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae earum laudantium, officiis quas nulla perferendis, deleniti.</p>
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
<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

// Container around modal content.
.modal-container {
  @include size(100% 100%);
  @include position(fixed, 0, null, null, 0);

  display: flex;
  opacity: 0;
  transition: all 0.3s ease;
  visibility: hidden;
  z-index: 99;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  // Overlay for contrast.
  .overlay {
    @include size(100% 100%);
    @include position(absolute, 0, null, null, 0);

    background: rgba($black, 0.4);
    z-index: 10;
  }

  // Modal itself.
  .modal {
    background: rgba($mercury, 0.9);
    box-shadow: 3px 4px 8px rgba($bg, 0.6);
    color: $black;
    margin: auto;
    max-width: 1000px;
    padding: 20px;
    position: relative;
    z-index: 10;

    h3,
    p {
      margin-top: 0;
    }

    h5 {
      margin: 0;
    }
  }

  .close-button {
    @include size(26px);
    @include position(absolute, -12px, null, null, -12px);

    background: rgba($white, 0.9);
    border: none;
    border-radius: 50%;
    box-shadow: 1px 2px 6px rgba($black, 0.6);
    display: flex;

    .fa {
      @include position(absolute, 50%, null, null, 50%)

      transform: translate(-50%, -50%);
    }
  }
} // .modal-container

</style>
