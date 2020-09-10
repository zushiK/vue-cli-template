<template>
  <v-app>
    <div class="signin">
      <div class="left_layer">
        <img class="logo" :src="require('@/assets/images/sp_logo.png')" />
      </div>
      <div class="right_layer">
        <div class="card">
          <h1>ログイン</h1>
          <div class="form-control">
            <v-text-field
              v-model="accountId"
              :rules="nameRules"
              label="アカウントID"
              required
            ></v-text-field>
          </div>
          <div class="form-control">
            <v-text-field
              v-model="userId"
              :rules="nameRules"
              label="ユーザーID"
              required
            ></v-text-field>
          </div>
          <div class="form-control">
            <v-text-field
              v-model="password"
              :rules="nameRules"
              label="パスワード"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPass = !showPass"
              :type="!showPass ? 'password' : 'text'"
              required
            ></v-text-field>
          </div>
          <div class="form-btn">
            <v-btn block large color="primary" :disabled="isButtonActive"
              >ログイン</v-btn
            >
          </div>
          <div class="v-row">
            <p>
              新規登録はこちらから
              <router-link to="/signup">新規登録</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'Signin',
  data: function() {
    return {
      accountId: '',
      userId: '',
      password: '',
      showPass: false
    };
  },
  methods: {
    // signIn: function() {
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.username, this.password)
    //     .then(
    //       user => {
    //         alert('Success!');
    //         this.$store.state.user = user;
    //         this.$router.push('/');
    //       },
    //       err => {
    //         alert(err.message);
    //       }
    //     );
    // }
  },
  computed: {
    nameRules() {
      return [
        (v: any) => !!v || '＊この項目は必須です'
        // (v: any) => v.length <= 10 || 'この項目は10文字以下にして下さい'
      ];
    },
    isButtonActive() {
      if (this.accountId && this.userId && this.password) {
        return false;
      }
      return true;
    }
  }
});
</script>

<style lang="scss" scoped>
.signin {
  display: flex;
  .left_layer {
    width: 50%;
    height: 100vh;
    position: relative;
    .logo {
      width: 500px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
  }
  .right_layer {
    background-color: $base-color;
    width: 50%;
    height: 100vh;
    position: relative;
    .card {
      width: fit-content;
      height: fit-content;
      border-radius: 2px;
      background-color: white;
      padding: 50px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      h1 {
        font-size: 25px;
        margin-bottom: 10px;
      }
      .form-control {
        width: 350px;
      }
      .form-btn {
        margin: 20px 0 30px 0;
      }
    }
  }
}
</style>
