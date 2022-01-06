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
  <h1>Live market prices:</h1>
  <Market />
</template>

<script>
import Market from "@/components/Market.vue";
import Navigation from "../components/Navigation.vue";
import { defineCustomElement } from "vue";
import CurrentTime from "../components/CurrentTime.ce.vue";

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
};
</script>

<style scoped>
.time-box {
  color: white;
}
.time-box p {
  font-weight: bold;
}
</style>