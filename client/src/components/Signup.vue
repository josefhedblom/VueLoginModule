<template>
<div class="container">
    <form>
      <div class="form-group">
        <label for="Username">Username</label>
        <input v-model="username" type="text" class="form-control" id="Username">
        {{usernameError}}
      </div>
      <div class="form-group">
        <label for="Email">Email address</label>
        <input v-model="email" type="text" class="form-control" id="Email">
        {{emailError}}
        {{duplicateErrors}}
      </div>
      <div class="form-group">
        <label for="Password">Password</label>
        <input v-model="password" type="password" class="form-control" id="Password">
        {{passwordError}}
      </div>
      <button @click="signup" class="btn btn-primary">Signup</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      usernameError:'',
      emailError:'',
      passwordError:'',
      duplicateErrors:''
    }
  },
  methods: {
     signup() {
      let newUser = {
        username: this.username,
        email: this.email,
        password: this.password
      }
        axios.post('http://localhost:5000/signup',newUser)
        .then(response => {
          console.log(response.data);
          this.$router.push('/login');
        }, err => {
         this.usernameError = err.response.data.errors.username;
         this.emailError    = err.response.data.errors.email;
         this.passwordError = err.response.data.errors.password;
         this.duplicateErrors = err.response.data.errors.duplicateErrors;
          console.log(err.response)
        })
    }
  }
}
</script>