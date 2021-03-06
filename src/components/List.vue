<template>
  <section class="list-wrapper">
    <ul class="list">
      <li>
          <span class="data-prompt">></span>
          <vue-typer
            :text='currentAnxiety.thought'
            @erased='onErased'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='55'
            :type-delay='35'
            :pre-erase-delay='3000'
            :erase-delay='100'
            erase-style='backspace'
            :erase-on-complete='true'
            caret-animation='blink'
            >
          </vue-typer>
      </li>
    </ul>
    <div class='carousel-controls'>
      <button class='carousel-button' @click="next">// Read Another</button>
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
      currentIndex: 0,
    };
  },
  firebase: {
     anxieties: anxietiesList,
  },
  methods: {
    next() {
      // Get length of the reversed & filtered array.
      const length = this.reverse.length;

      // Compare current anxiety's index with length of array to cycle through.
      if ((this.currentIndex + 1) < length) {
        this.currentIndex = this.currentIndex + 1;
      } else {
        this.currentIndex = 0;
      }
    },
    onErased() {
      this.next();
    },
  },
  // Explicitly set binding data to firebase as an array.
  created() {
      this.$bindAsArray('anxieties', anxietiesList);
  },
  computed: {
    filteredAnxieties() {
      return this.anxieties.filter(anxiety => anxiety.status);
    },
    reverse() {
      return this.filteredAnxieties.slice(0).reverse();
    },
    currentAnxiety() {
      return this.reverse[this.currentIndex];
    },
  },
};

</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';

.list-wrapper {
  padding-top: 16px;

  @include media($phone-landscape, null) {
    padding-top: 40px;
  }
}

.list {
  list-style-type: none;
  margin: 0 0 20px;
  min-height: 50px;
  overflow: hidden;
  padding: 0;

  @include media($tablet-portrait, null) {
    padding: 0 12px 12px 0;
    min-height: 100px;
  }

  @include media($tablet-landscape, null) {
    min-height: 200px;
  }

  li {
    display: flex;
    padding: 10px 10px 10px 5px;
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

  .custom.caret {
    background-color: $zsh-text;
    line-height: 1.3;
    width: 3px;
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
  border-radius: 2px;
  color: $zsh-text;
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
