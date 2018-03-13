<template>
  <section class="list-wrapper">
      <ul class="list">
        <li v-bind:key="anxiety.key" v-for="anxiety in anxieties" v-if="anxiety.status"><span class="data-prompt">></span> {{anxiety.thought}}</li>
      </ul>
  </section>
</template>

<script>
import firebase from '../firebase';

const anxietiesList = firebase.database().ref('anxieties');

export default {
  name: 'List',
  data() {
    return {
      scrollingList: [],
      // Iterate over anxieties list.
      // Take reverse chronological item.
      // Add to empty array.
      // Repeat.
    };
  },
  firebase: {
     anxieties: anxietiesList,
     // test: anxietiesList,
  },
  methods: {
    buildList() {

    },
  },
  // Explicitly set binding data to firebase as an array.
  created() {
      this.$bindAsArray('anxieties', anxietiesList);
  },
  mounted() {
    // console.log(this.anxieties);
    this.buildList();
  },
};

</script>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.list {
  background-color: #222;
  border: 2px solid #bbb;
  border-top: 12px solid #bbb;
  color: $black;
  list-style-type: none;
  margin: 0 0 16px;
  max-width: 465px;
  padding: 12px;

  li {
    animation: scroll 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    color: white;
    opacity: 1;
  }

  .data-prompt {
    margin-right: 8px;
    opacity: 0.4;
  }

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
