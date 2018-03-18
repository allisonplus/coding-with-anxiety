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
            :pre-type-delay='75'
            :type-delay='135'
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
        <button class='carousel-button' @click="previous">Previous</button>
        <button class='carousel-button' @click="next">Next</button>
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
      } else { return; }
    },
    previous() {
      const last = this.anxieties.pop();
      this.anxieties = [last].concat(this.anxieties);
      if (this.anxieties[0].status === false) {
        this.previous();
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

.list {
  background-color: #222;
  border: 2px solid #bbb;
  border-top: 12px solid #bbb;
  list-style-type: none;
  margin: 0 0 16px;
  max-width: 400px;
  overflow: hidden;
  padding: 12px;

  li {
    align-items: center;
    color: white;
    display: flex;
    padding: 10px;
    transition: transform 0.4s linear;

    &:not(:first-of-type) {
      opacity: 0;
    }
  }

  .data-prompt {
    margin-right: 8px;
    opacity: 0.4;
  }

  p {
    display: inline-block;
  }
}

.vue-typer {

  .custom.char {
    color: #fff;
  }
}

.anxiety-form {
  margin-top: 50px;

  label {
    margin-right: 16px;
  }
}

</style>
