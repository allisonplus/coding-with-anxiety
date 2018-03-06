<template>
  <section class="right">
    <div id="instafeed"></div>
  </section>
</template>

<script>
import Instafeed from 'instafeed';

const feed = new Instafeed({
  get: 'user',
  userId: '7183925804',
  accessToken: '7183925804.9ddded5.19f19b53c4d84028838191faf8041d5e',
  template: '<a class="insta-link" href="{{link}}"><img src="{{image}}" /></a>',
});
feed.run();

export default {
  name: 'Instafeed',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/styles/_variables.scss';

// Instagram feed on right side.
#instafeed {

  img {
    display: block;
  }
} // #instafeed

</style>
