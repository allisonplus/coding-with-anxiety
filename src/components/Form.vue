<template>
  <section class="wrapper-form">
    <form id="anxiety-share" class="anxiety-form" v-on:submit.prevent="addAnxiety">
      <label for="Your Anxiety">Submit Your Anxiety</label>
       <span class="data-prompt"><i class="fas fa-angle-double-right"></i></span><span class="blinking-cursor"></span>
       <input type="text" id="yourAnxiety" v-model="newAnxiety.thought" autofocus autocomplete="off">

       <transition name="slide-fade">
         <p v-if="anxietySubmitted" class="submitted">Anxiety submitted for approval</p>
       </transition>
    </form>
  </section>
</template>

<script>
import firebase from '../firebase';

const anxietiesList = firebase.database().ref('anxieties');

export default {
  name: 'Form',
  data() {
    return {
      newAnxiety: {
        thought: '',
        status: false,
      },
      anxietySubmitted: false,
    };
  },
  firebase: {
     anxieties: anxietiesList,
  },
  methods: {
    addAnxiety() {
      anxietiesList.push(this.newAnxiety);
      this.newAnxiety.thought = '';

      this.anxietySubmitted = true;
      setTimeout(() => {
        this.anxietySubmitted = false;
      }, 1500);
    },
  },
};

</script>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.anxiety-form {
  border-top: 1px dotted $zsh-text;
  border-bottom: 1px dotted $zsh-text;
  padding: 3px 0 7px;

  .data-prompt {
    color: $zsh-text;
    font-size: 18px;
  }

  label {
    display: block;
  }

  input {
    background-color: $bg;
    border-radius: 0;
    border: none;
    box-shadow: none;
    color: $mercury;
    padding: 8px;
    vertical-align: middle;
    white-space: normal;

    &:focus,
    &:active {
      outline: 1px dotted $zsh-text;
    }
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.5s ease;
  }

  .slide-fade-enter,
  .slide-fade-leave-to  {
    opacity: 0;
  }

  .submitted {
    background-color: $helio;
    color: $mercury;
    display: inline-block;
    margin: 0;
    padding: 0 8px;
  }
}

</style>
