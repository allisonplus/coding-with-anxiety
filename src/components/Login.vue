<template>
   <div class="login">
    <h1>This is Fine.</h1>

    <form v-on:submit.prevent>
      <div class="input-row">
        <label for="email" class="email visuallyhidden">Email:</label>
        <input type="email" id="email" placeholder="Email" v-model="email">
      </div>
      <div class="input-row">
        <label for="password" class="pw visuallyhidden">Password:</label>
        <input type="password" id="password" placeholder="Password" v-model="password">
        <input type="submit" value="Login" v-on:click="signIn">
      </div>
    </form>
   </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      signIn() {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() => firebase.auth().signInWithEmailAndPassword(this.email, this.password))
          .then(() => {
            this.$router.replace('dashboard');
          })
          /* eslint-disable no-unused-vars */
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      },
      userCheck() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.$router.replace('dashboard');
          } else {
          }
        });
      },
    },
    mounted() {
      this.userCheck();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  margin-top: 0;
  text-align: center;
}

#app .dashboard {
    background-color: #272822;
    height: 100vh;
}

input {
  border-radius: 4px;
  border: none;
  box-shadow: 1px;
  display: block;
  margin: 10px;
  padding: 10px;
  width: 94%;
}

input[type="submit"] {
  background-color: #6b9ae0;
  color: #fff;

  &:hover {
    background-color: #508cdd;
    box-shadow: 0 0 10px 0 #888;
    cursor: pointer;
  }
}

.login {
  background-color: #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 #888;
  margin: 10% auto;
  padding: 40px;
  width: 400px;
}

</style>
