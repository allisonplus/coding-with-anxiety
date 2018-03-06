<template>
    <div class="container">
      <section class="left">
        <div class="wrapper">
          <header>
            <h1>{{ msg }}</h1>

            <div class="social clearfix">
              <a href="https://www.instagram.com/codingwithanxiety/"><i class="fab fa-instagram"></i></a>
              <a href="http://www.twitter.com/codinganxiety"><i class="fab fa-twitter"></i></a>
            </div> <!--.social-->
          </header>

          <Form/>
        </div> <!--.wrapper-->
      </section>

      <Instafeed/>
      <Modal/>

  </div><!--.container-->
</template>

<script>
import Form from './Form';
import Instafeed from './Instafeed';
import Modal from './Modal';

export default {
  name: 'Content',
  components: {
    Form,
    Instafeed,
    Modal,
  },
  data() {
    return {
      msg: 'Coding with Anxiety',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

// Social icons.
.social {
  margin-bottom: 20px;

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
