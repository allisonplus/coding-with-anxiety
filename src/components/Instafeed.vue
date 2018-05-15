<template>
  <section class="right">
    <div id="instafeed"></div>
  </section>
</template>

<script>
import Instafeed from 'instafeed.js';

export default {
  name: 'Instafeed',
  data() {
    return {
    };
  },
  mounted() {
    this.feed = new Instafeed({
      get: 'user',
      userId: '7183925804',
      accessToken: '7183925804.9ddded5.19f19b53c4d84028838191faf8041d5e',
      resolution: 'thumbnail',
      template: '<a class="insta-link" href="{{link}}" tabindex="-1" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
      sortBy: 'most-recent',
    });
    this.feed.run();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/styles/_variables.scss';

// Instagram feed on right side.
#instafeed {

  img {

    @include media($tablet-landscape, null) {
      display: block;
    }
  }
} // #instafeed

</style>
