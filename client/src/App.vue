<template>
  <div id="app">
    <div id="nav">  
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link>  |
      <router-link to="/secret">Secret</router-link> |
      <a href="#" @click="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  created(){
      if(localStorage.getItem('token') === undefined){
        this.$router.push('/login')
      }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/login')
    }
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
