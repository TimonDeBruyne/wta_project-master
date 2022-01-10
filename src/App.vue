<template>
  <div id="app">
    <navigation />
    <router-view />
    <p>
      This website is made by Timon De Bruyne for the course Web Topics Advanced
    </p>
  </div>
</template>
        

<script>
export default {
  name: "App",
  computed: {
    userLoggedIn() {
      return this.$store.getters.currentUserLoggedIn;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
p {
  color: aliceblue;
}
</style>
