<template>
  <navigation />
  <h1>Live market time:</h1>
  <div class="time-box">
    <p>Belgium time:</p>
    <current-time></current-time>
  </div>
  <div class="time-box">
    <p>New York time:</p>
    <current-time time-zone="America/New_York"></current-time>
  </div>

  <h1>Find info about a coin:</h1>
  <div class="info">
    <input placeholder="Enter coin name..." v-model="name" />
    <div class="greeting">You want info about: {{ name }}</div>
    <div class="search">
      <search-result v-bind:name-attribute="name"></search-result>
    </div>
  </div>

  <h1>Live market prices:</h1>
  <Market />
</template>

<script>
import Market from "@/components/Market.vue";
import Navigation from "../components/Navigation.vue";
import { defineCustomElement } from "vue";
import CurrentTime from "../components/CurrentTime.ce.vue";
import "../web-components/search-result";

const CurrentTimeComponent = defineCustomElement(CurrentTime);

customElements.define("current-time", CurrentTimeComponent);

document.querySelector("current-time");
if (document) {
  document.addEventListener("datechange", recordTime);
}

function recordTime(event) {}

export default {
  name: "App",
  components: {
    Market,
    Navigation,
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>
.time-box {
  color: white;
}
.time-box p {
  font-weight: bold;
}
.greeting {
  margin-top: 1.5rem;
  color: aliceblue;
}
.info input {
  background-color: aliceblue;
  margin: auto;
  margin-top: 2rem;
  color: black;
}
.search {
  background-color: aliceblue;
  margin: auto;
  margin-top: 2rem;
  width: 20rem;
  border: solid;
  border-color: black;
  border-radius: 10px;
}
</style>