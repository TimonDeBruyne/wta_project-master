<template>
  <div id="nav">
    <router-link to="/dashboard" class="link">Dashboard</router-link>
    <router-link to="/market" class="link">Live market</router-link>
    <button class="warning" @click="logout">Logout</button>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  name: "Navigation",
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$store.dispatch("setUser", null);
        this.$router.push("login");
      });
    },
  },
  computed: {
    userLoggedIn() {
      return this.$store.getters.currentUserLoggedIn;
    },
  },
};
</script>

<style scoped>
.warning {
  margin-top: 20px;
  margin-left: 2rem;
  background-color: pink;
  color: rgb(0, 0, 0);
}
.link {
  margin-right: 1rem;
}
</style>