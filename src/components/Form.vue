<template>
  <form v-on:submit.prevent="pressSubmit">
    <!-- <input type="text" name="username" placeholder="What's your name?" /> -->
    <input v-model="anxietyType" type="text" name="currentItem" placeholder="What's your anxiety?" />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      anxietyType: '',
    };
  },

  methods: {
    pressSubmit() {
      console.log(this.anxietyType);
    },
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

form {
  /*display: block;*/
}

</style>
