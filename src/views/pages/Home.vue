<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      feed: null
    };
  }
};
</script>
