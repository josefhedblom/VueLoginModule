<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputUsername">Email</label>
        <input v-model="email" type="text" class="form-control" id="exampleInputUsername">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword">
      </div>
      <button @click="login" class="btn btn-primary">Login</button>
    </form>
    {{errorTitle}} {{errorMessage}}
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorTitle:'',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/login', user)
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/secret');
          }
        }, err => {
          console.log(err.response.errors);
          this.errors = err.response.data;
          this.errorTitle = err.response.data.title;
          this.errorMessage = err.response.data.error
        })
    }
  }
}
</script>