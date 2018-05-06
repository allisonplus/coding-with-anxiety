<template>
  <section class="wrapper-form">
    <form id="anxiety-share" class="anxiety-form" v-on:submit.prevent="addAnxiety">
      <label for="Your Anxiety">Submit Your Anxiety</label>
       <span class="data-prompt"><i class="fas fa-angle-double-right"></i></span><span class="blinking-cursor"></span>
       <input type="text" id="yourAnxiety" v-model="newAnxiety.thought">
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
    };
  },
  firebase: {
     anxieties: anxietiesList,
  },
  methods: {
    addAnxiety() {
      anxietiesList.push(this.newAnxiety);
      this.newAnxiety.thought = '';
    },
  },
};

</script>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.anxiety-form {
  border-top: 1px dotted $zsh-text;
  border-bottom: 1px dotted $zsh-text;
  padding: 3px 0;

  .data-prompt {
    color: $zsh-text;
    vertical-align: super;
    font-size: 18px;
  }

  .blinking-cursor {
    @include size(2px 25px);

    animation-name: blinker;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(1,0,0,1);
    animation-duration: 1s;
    background: $zsh-text;
    border-radius: 3px;
    display: inline-block;
    margin-left: 6px;
  }

  @keyframes blinker {
    from { opacity: 1.0; } to { opacity: 0.0; }
  }

  label {
    display: block;
  }

  input {
    background-color: $bg;
    border-radius: 0;
    border: none;
    box-shadow: none;
    vertical-align: middle;
    white-space: normal;
  }
}

</style>
