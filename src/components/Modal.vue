<template>
  <section class="modal" role="dialog">
    <button class="show-info" v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive" aria-label="Open Modal"><span>?</span></button>

    <div class="modal-container" v-bind:class="{ active: isActive }">
      <div class="overlay" v-on:click="closeModal"></div>
      <div class="modal">
          <button class="close-button" v-bind:class="{ active: isActive }" v-on:click="closeModal" aria-label="Close Modal"><i class="fa fa-times"></i></button>
          <h3>About</h3>
          <p>I started this site to help people feel less alone.</p>
          <p>The purpose of this is to help you externalize your anxieties. To realize that many people experience them, even if it isn't always completely transparent.</p>

        <h3>Resources</h3>
        <ul class="resource-list">
          <li><a href="https://osmihelp.org/">Open Source Mental Illness</a>: awareness, education, and resources</li>
          <li><a href="http://selfcare.tech/">Selfcare.tech</a>: repository of self-care resources for developers & others</li>
          <li><a href="https://www.crisistextline.org/">Crisis Text Line</a>: US-based support line</li>
          <li><a href="https://www.imalive.org/">I'm Alive</a>: online crisis chat support and education</li>
          <li><a href="https://adaa.org/finding-help/mobile-apps#">Mental Health apps</a>: list of ADAA reviewed mental health apps</li>
        </ul>

        <!-- eslint-disable-next-line -->
        <p class="disclaimer"><em>Note:</em> this tool is not a substitute for professional diagnosis, support & guidance. If you're in need of immediate assistance, please call your doctor or local emergency services immediately.</p>

        <div class="social">
          <Instafeed/>
          <div class="icons clearfix">
            <a href="https://www.instagram.com/codingwithanxiety/"><i class="fab fa-instagram"></i></a>
            <a href="http://www.twitter.com/codinganxiety"><i class="fab fa-twitter"></i></a>
          </div>
          <h5>Created with feels by <a href="http://www.allisontarr.com">Allison Tarr</a>.</h5>
        </div><!--social-->

      </div><!--modal-->
    </div><!--modal-container-->
  </section>

</template>

<script>
import Instafeed from './Instafeed';

export default {
  name: 'Modal',
  components: {
    Instafeed,
  },
  data() {
    return {
      isActive: false,
    };
  },
  created() {
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    });
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
  @include size(100% auto);
  @include position(fixed, 50%, null, null, 50%);

  display: flex;
  margin: 0 auto;
  max-height: calc(100% - 60px);
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  visibility: hidden;
  z-index: 99;

  @include media($tablet-landscape, null) {
    @include size(100% 100%);

    max-height: initial;
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }

  // Overlay for contrast.
  .overlay {
    @include size(100% 100%);
    @include position(absolute, 0, 0, 0, 0);

    background: rgba($black, 0.4);
    z-index: 10;
  }

  // Modal itself.
  .modal {
    background: rgba($mercury, 0.9);
    box-shadow: 3px 4px 8px rgba($bg, 0.6);
    color: $black;
    line-height: 1.5;
    margin: 0 auto;
    max-height: calc(100% - 150px);
    max-width: 90%;
    overflow: auto;
    padding: 12px 16px 0;
    position: relative;
    z-index: 99;

    @include media($tablet-landscape, null) {
      margin: auto;
      max-width: 1000px;
      overflow: auto;
    }

    p {
      margin: 0 0 12px;
    }

    h3 {
      margin: 0;
    }

    h5 {
      display: inline-block;
      font-size: 16px;
      line-height: 1;
      margin: 0;

      a {
        background-color: $robin;
        background: linear-gradient(60deg, $helio 15%, darken($robin, 15%) 35%, $helio 62%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    } // h5

    a {
      color: $helio;
      letter-spacing: .8px;
      text-decoration: none;
      transition: color 0.25s ease-in-out;

      &:hover,
      &:active {
        color: $bg;
      }
    }
  } // modal

  .close-button {
    @include size(26px);
    @include position(absolute, 12px, 12px, null, null);

    background: rgba($white, 0.9);
    border: none;
    border-radius: 50%;
    box-shadow: 1px 2px 6px rgba($black, 0.6);
    display: flex;

    .fa {
      @include position(absolute, 50%, null, null, 50%)

      transform: translate(-50%, -50%);
    }
  } // close-button
} // .modal-container

.resource-list {
  font-size: 18px;
  margin: 0 0 10px;

  li {
    line-height: 1.4;
  }
}

.disclaimer {
  font-size: 16px;
}

// Social icons.
.social {
  margin: 0 0 16px;

  .icons {
    display: inline-block;
    margin-right: 12px;
    vertical-align: middle;
  }

 .icons a {
    float: left;
    font-size: 0;
    transition: color 0.2s linear;

    &:not(:last-of-type) {
      margin-right: 12px;
    }

    .fab {
      font-size: 22px;
    }
 } // .icons a
} // social
</style>
