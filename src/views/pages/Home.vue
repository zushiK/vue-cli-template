<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    {{ user }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/components/HelloWorld.vue';
import firebase from 'firebase';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      feed: null,
      user: 'test'
    };
  },
  mounted() {
    console.log('mounted');
    const observer = firebase.auth().currentUser;
    console.log(observer);
    if (observer) {
      console.log(observer);
      this.user = observer;
    } else {
      this.user = 'no user';
    }
  }
};
</script>
