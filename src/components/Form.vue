<template>
  <section class="wrapper-form">
    <ul class="list">
      <li v-bind:key="anxiety.key" v-for="anxiety in anxieties" v-if="anxiety.status">{{anxiety.thought}}</li>
    </ul>

    <form id="anxiety-share" class="anxiety-form" v-on:submit.prevent="addAnxiety">
      <label for="Your Anxiety">Submit Your Anxiety</label>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.list {
  list-style-type: none;
  margin: 0 0 16px;
  max-width: 465px;
  padding: 0;

  li:not(:last-of-type) {
    margin-bottom: 12px;
  }
}

.anxiety-form {
  margin-top: 50px;

  label {
    margin-right: 16px;
  }
}

</style>
