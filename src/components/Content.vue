<template>
    <div class="container">
      <section class="left">
        <div class="wrapper">
          <header>
            <div class="line">
              <p><span class="now">Last login: {{ dateTime }}</span></p>
            </div>
            <div class="line">
              <span class="path">~/<h1>{{ msg }}</h1></span>
              <span class="branch"><i class="fas fa-code-branch"></i> master</span>
              <span class="command"></span>
            </div>
          </header>
        </div> <!--.wrapper-->

        <List/>

        <div class="anxiety-wrapper">
          <Form/>
        </div><!--.anxiety-wrapper-->
      </section>

      <Instafeed/>
      <Modal/>

  </div><!--.container-->
</template>

<script>
import Form from './Form';
import Instafeed from './Instafeed';
import Modal from './Modal';
import List from './List';

function getDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    let seconds = '';

    seconds = second <= 10 ? `0${second}` : second;

    const weekDay = [
      'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat',
    ];
    const today = weekDay[now.getDay()];
    const monthName = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sept', 'Oct',
      'Nov', 'Dec',
    ];
    const thisMonth = monthName[now.getMonth()];

    return `${today} ${thisMonth} ${day} ${year} ${hour}:${minute}:${seconds}`;
}

export default {
  name: 'Content',
  components: {
    Form,
    Instafeed,
    Modal,
    List,
  },
  data() {
    return {
      msg: 'Coding-with-Anxiety',
      dateTime: getDateTime(),
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

h1 {
  display: inline-block;
  font-size: 20px;
  margin: 0;
}

.line:nth-of-type(1) {
  opacity: 0.75;
}

.line:nth-of-type(2) {
  font-size: 0;

  @include media($phone-landscape, null) {
    height: 1.5rem;
  }
}

.path,
.branch {
  display: inline-block;
  font-size: 20px;
  color: $white;
}

.path {
  background-color: $zsh-path-bg;
  padding: 0 10px;
}

.branch {
  background-color: $zsh-branch-bg;
  padding-right: 12px;
  color: $bg;

  &:before {
    border: 14px solid transparent;
    border-left-color: $zsh-path-bg;
    content: '';
    display: inline-block;
    height: 0;
    vertical-align: -7px;
    width: 0;
  }
}

.command {
  &:before {
      border: 16px solid transparent;
      border-left-color: $zsh-branch-bg;
      content: '';
      display: inline-block;
      height: 0;
      vertical-align: -9px;
      width: 0;
  }
}

.anxiety-wrapper {
  margin: 40px 0 18px;

  @include media($tablet-portrait, null) {
    margin: 85px 0 0;
  }
}

// Social icons.
.social {
  margin: 20px 0;

  a {
    color: $white;
    float: left;
    transition: color 0.2s linear;

    &:hover,
    &:active,
    &:focus {
      color: darken($white, 30%);
    }

    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }

  .fab {
    font-size: 32px;
  }
} // social

</style>
