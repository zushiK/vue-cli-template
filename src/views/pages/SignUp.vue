<template>
  <div class="signup">
    <h2>新規アカウント作成</h2>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp">Register</button>
    <p>
      すでにアカウントをお持ちの方
      <router-link to="/signin">こちらからログイン</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'Signup',
  components: {},
  props: {},
  data() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Success!');
          this.$router.push('/');
        })
        .catch(err => {
          alert(err);
        });
    }
  }
});
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
