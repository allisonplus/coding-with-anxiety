<template>
  <section class="wrapper-form">
    <form id="anxiety-share" class="anxiety-form" v-on:submit.prevent="addAnxiety">
      <label for="Your Anxiety">Your Anxiety</label>
      <input type="text" id="yourAnxiety" v-model="newAnxiety.anxiety">
    </form>

      <ul class="list">
        <li v-for="anxiety in anxieties">{{anxiety.anxiety}}</li>
      </ul>
  </section>
</template>

<script>
import firebase from '../firebase';
let anxietiesList = firebase.database().ref('anxieties');

export default {
  name: 'Form',
  data() {
    return {
      newAnxiety: {
        anxiety: '',
      },
    };
  },
  firebase: {
     anxieties: anxietiesList,
  },
  methods: {
    addAnxiety() {
      anxietiesList.push(this.newAnxiety);
      this.newAnxiety.anxiety = '';
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
