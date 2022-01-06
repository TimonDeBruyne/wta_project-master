<template>
  <navigation />
  <h1>How to invest in crypto:</h1>
  <h2>First steps:</h2>
  <div class="list">
    <ul>
      <li>Search coins you want to invest in.</li>
      <li>Make an account on an exchange like Binance or Blockchain.</li>
      <li>Put spare money on the exchange app.</li>
      <li>Buy the crypto you want!</li>
      <li>Hold.</li>
    </ul>
  </div>
  <h2>DYOR:</h2>
  <p class="dyor">
    Always Do Your Own Research, never listen to other people. Don't trade with
    money you can't afford to lose. Don't trade emotional, money not sold is
    money not lost. Don't put money in coins you don't believe in.
  </p>
  <h2>Which coins to invest in:</h2>
  <echart />
  <h1>Why you should invest in crypto:</h1>
  <h2>Situation 1:</h2>
  <h3>You invest 500 dollars in Bitcoin over 3 years</h3>
  <p class="white">500 turns 42000</p>
  <div class="d3">
    <D3 />
  </div>
  <h2>Situation 2:</h2>
  <h3>You invest 10000 dollars in Etherium over 1 year</h3>
  <p class="white">10000 turns 38000</p>
  <div class="chartkick">
    <chartkick />
  </div>
  <h2>Situation 3:</h2>
  <h3>You invest 100000 dollars</h3>
  <h4>33333 dollars in VET, 33333 dollars in Link and 33333 dollars in SOL</h4>
  <p class="white">Bigger profits</p>
  <highcharts />
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Echart from "../components/Echart.vue";
import D3 from "../components/D3.vue";
import Chartkick from "../components/Chartkick.vue";
import Highcharts from "../components/Highcharts.vue";

export default {
  components: { Navigation, Echart, D3, Chartkick, Highcharts },
  name: "Dashboard",
  methods: {},
  computed: {
    userLoggedIn() {
      return this.$store.getters.currentUserLoggedIn;
    },
  },
};
</script>

<style scoped>
.logout {
  margin: auto;
}
.primary {
  margin-top: 20px;
  background-color: #4a8606;
  color: rgb(250, 250, 250);
  font-weight: bold;
}
.warning {
  margin-top: 20px;
  background-color: pink;
  color: rgb(0, 0, 0);
}
.toggle {
  cursor: pointer;
}

.chart-box {
  margin-top: 5rem;
}
.d3 {
  background-color: rgb(15, 13, 40);
  color: aliceblue;
}
.list {
  color: aliceblue;
  text-align: left;
  margin-left: 10rem;
}
.dyor {
  color: aliceblue;
  margin: 0rem 10rem;
  text-align: left;
}
.white {
  color: aliceblue;
}
.chartkick {
  background-color: rgb(255, 255, 255);
  color: aliceblue;
}
</style>
