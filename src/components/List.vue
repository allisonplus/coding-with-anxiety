<template>
  <section class="list-wrapper">
    <ul class="list">
      <transition-group name="list-transition" tag="span">
        <li v-for="(anxiety, index) in anxieties" v-if="anxiety.status" class='slide' :key="anxiety['.key']">
          <span class="data-prompt">></span>
          <vue-typer v-if="index===0"
            :text='anxiety.thought'
            :repeat='0'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='55'
            :type-delay='35'
            :pre-erase-delay='2000'
            :erase-delay='200'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='blink'
            >
          </vue-typer>
          <p v-else>{{anxiety.thought}}</p>
        </li>
      </transition-group>
      </ul>
      <div class='carousel-controls'>
        <button class='carousel-button' @click="next">// Read More</button>
      </div>
  </section>
</template>

<script>
import firebase from '../firebase';

const anxietiesList = firebase.database().ref('anxieties');

export default {
  name: 'List',
  data() {
    return {
    };
  },
  firebase: {
     anxieties: anxietiesList,
  },
  methods: {
    next() {
      const first = this.anxieties.shift();
      this.anxieties = this.anxieties.concat(first);
      if (this.anxieties[0].status === false) {
        this.next();
        // eslint-disable-next-line
      } else { return; }
    },
    previous() {
      const last = this.anxieties.pop();
      this.anxieties = [last].concat(this.anxieties);
      if (this.anxieties[0].status === false) {
        this.previous();
        // eslint-disable-next-line
      } else { return; }
    },
  },
  // Explicitly set binding data to firebase as an array.
  created() {
      this.$bindAsArray('anxieties', anxietiesList);
  },
};

</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';

.list-wrapper {
  margin-top: 16px;

  @include media($phone-landscape, null) {
    margin-top: 40px;
  }
}

.list {
  list-style-type: none;
  margin: 0 0 20px;
  min-height: 50px;
  overflow: hidden;
  padding: 0 12px 12px 0;

  @include media($tablet-portrait, null) {
    min-height: 200px;
  }

  li {
    display: flex;
    padding: 10px;
    transition: transform 0.4s linear;
    word-break: break-all;

    &:not(:first-of-type) {
      display: none;
    }
  } // li

  .data-prompt {
    margin-right: 8px;
    opacity: 0.4;
  }

  p {
    display: inline-block;
    margin: 0;
  }
} // .list

.vue-typer {

  .custom.char {
    color: $white;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    word-break: break-all;
    word-wrap: break-word;
  }

  &.typed {
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
        /* Styles specific to typed characters
           i.e. characters to the left of the caret */
      }
      &.selected {
        /* Styles specific to selected characters
           i.e. characters to the right of the caret while VueTyper's
                'eraseStyle' is set to a selection-based style */
      }
}

.carousel-button {
  background-color: $bg;
  border: none;
  color: $zsh-text;
  border-radius: 2px;
  font-style: italic;
  padding: 4px 10px;
  transition: background-color 0.4 ease-in-out, color 0.4 ease-in-out;

  &:hover {
    background-color: lighten($bg, 15%);
    color: lighten($zsh-text, 15%);
  }

  &:focus,
  &:active {
    background-color: $helio;
    color: $robin;
  }
}

</style>
