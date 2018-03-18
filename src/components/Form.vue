<template>
  <section class="wrapper-form">
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

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.anxiety-form {
  margin-top: 50px;

  label {
    margin-right: 16px;
  }
}

</style>
