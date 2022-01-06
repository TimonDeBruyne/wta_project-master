<template>
  <div id="app">
    <Authentication />
    <particles-bg
      type="cobweb"
      :canvas="{ backgroundColor: '#888' }"
      :bg="true"
    />
  </div>
</template>

<script>
import Authentication from "@/components/Authentication.vue";
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: "App",
  components: {
    Authentication,
    ParticlesBg,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>