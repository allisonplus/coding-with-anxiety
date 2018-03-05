<template>
   <div class="dashboard">
    <h1>Dashboard</h1>

    <div class="wrapper">

      <div class="table">
        <div class="row header">
          <span class="cell">Anxiety Thought</span>
          <span class="cell">Approved?</span>
        </div>

        <div class="row" v-for="anxiety in sortedAnxieties" :key="anxiety['.key']">
          <span class="cell">{{anxiety.thought}}</span>
          <span class="cell"><input type="checkbox" v-model="anxiety.status" v-bind:id="anxiety.id" v-on:click="updateStatus(anxiety)">{{anxiety.status}}</span>
        </div>

      </div><!--.table-->
    </div><!--.wrapper-->

    <input type="submit" value="Logout" v-on:click="logOut">
   </div>
</template>

<script>
  import firebase from 'firebase';

  const db = firebase.database();

  const anxietiesList = firebase.database().ref('anxieties');

  export default {
    name: 'dashboard',
    data() {
      return {
      };
    },
    firebase: {
       anxieties: anxietiesList,
    },
    methods: {
      logOut() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login');
        });
      },
      updateStatus: function (anxiety) {
          const childKey = anxiety['.key'];
          const copy = {...anxiety};

          // Delete `.key` property from the anxiety.
          delete copy['.key'];
          copy.status = !copy.status;

          // Set the updated anxiety value.
          this.$firebaseRefs.anxieties.child(childKey).set(copy);
      },
    },
    // Explicitly set binding data to firebase as an array.
    created() {
        this.$bindAsArray('anxieties', anxietiesList);
    },
    computed: {
      sortedAnxieties() {
        const newArray = this.anxieties.sort((anxiety) => {
          /* eslint-disable no-else-return */
          if (anxiety.status) {
            return 1;
          }
        });
        return newArray;
      },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#app .dashboard {
  background-color: #272822;
  color: #e5e5e5;
  height: 100vh;
  padding: 40px;
}

h1 {
  margin: 0;
  text-align: center;
}

.wrapper {
  padding: 40px 40px 0;
  margin: 20px auto;
  max-width: 800px;
}

.table {
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  color: #000;
  display: table;
  margin: 0 0 40px 0;
  text-align: center;
  width: 100%;
}

.row {
  display: table-row;
  background: lighten(#00DBDE, 50%);

  &:nth-of-type(odd) {
    background: lighten(#00DBDE, 42%);
  }

  &.header {
    background: linear-gradient(60deg, #00DBDE 25%, #FC00FF 85%);
    font-weight: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  &.false {
    background-color: teal;
  }
}

.cell {
    padding: 6px 12px;
    display: table-cell;

    &:first-of-type {
      border-right: 2px solid #00DBDE;
      text-align: left;
    }
}

</style>
