<template>
   <div class="dashboard">
    <header>
      <div class="wrapper">
        <h1>Dashboard</h1>
        <input class="logout" type="submit" value="Exit" v-on:click="logOut">
      </div>
    </header>

    <div class="wrapper">
      <div class="table">
        <div class="row header">
          <span class="cell">Anxiety Thought</span>
          <span class="cell">Approved?</span>
          <span class="cell">Delete</span>
        </div>

        <div class="row" v-for="anxiety in sortedAnxieties" :key="anxiety['.key']">
          <span class="cell">{{anxiety.thought}}</span>
          <span class="cell"><input type="checkbox" v-model="anxiety.status" v-bind:id="anxiety.id" v-on:click="updateStatus(anxiety)"><span class="boolean">{{anxiety.status}}</span></span>
          <span class="cell"><a @click.prevent="removeAnxiety(anxiety)" href="#" class="delete">&cross;</a></span>
        </div>

      </div><!--.table-->
    </div><!--.wrapper-->

   </div>
</template>

<script>
  import firebase from 'firebase';

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
      updateStatus(anxiety) {
          const childKey = anxiety['.key'];
          const copy = { ...anxiety };

          // Delete `.key` property from the anxiety.
          delete copy['.key'];
          copy.status = !copy.status;

          // Set the updated anxiety value.
          this.$firebaseRefs.anxieties.child(childKey).set(copy);
      },
      removeAnxiety(anxiety) {
        const childKey = anxiety['.key'];
        this.$firebaseRefs.anxieties.child(childKey).remove();
        this.anxieties.splice(this.anxieties.indexOf(anxiety), 1);
      },
    },
    // Explicitly set binding data to firebase as an array.
    created() {
        this.$bindAsArray('anxieties', anxietiesList);
    },
    computed: {
      sortedAnxieties() {
        const newArray = this.anxieties.sort((anxiety) => {
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
@import '../assets/styles/_variables.scss';

#app .dashboard {
  background-color: $bg;
  font-family: $font-sans;
  height: 100vh;
  padding: 40px;
}

// Wrapper.
.wrapper {
  margin: 20px auto;
  max-width: 900px;

  header & {
    display: flex;
    justify-content: space-evenly;
  }
} // .wrapper

// Header.
header {
  h1 {
    color: $white;
    display: inline-block;
    margin: 0;
    text-align: center;
  }

  // Logout button.
  .logout {
    background-color: $white;
    border: none;
    font-family: $monospace;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: lighten($electric, 40%);
    }
  }
} // header

// Table w/ data.
.table {
  color: $black;
  display: table;
  margin: 0 0 40px 0;
  text-align: center;
  width: 100%;
}

.row {
  display: table-row;
  background-color: lighten($robin, 50%);

  &:nth-of-type(odd) {
    background-color: lighten($robin, 42%);
  }

  &.header {
    background: linear-gradient(60deg, $robin 25%, $electric 85%);
    font-weight: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: $monospace;
  }
}

.cell {
    padding: 6px 12px;
    display: table-cell;

    &:first-of-type {
      border-right: 2px solid $robin;
      text-align: left;
    }
}

input[type='checkbox'] {
  margin-right: 8px;

}

.boolean {
  text-transform: capitalize;
  vertical-align: middle;
}

a.delete {
  text-decoration: none;
  color: $helio;
}

</style>
