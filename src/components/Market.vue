<template>
  <section class="section">
    <table>
      <thead>
        <tr class="is-selected">
          <th>#</th>
          <th>Name</th>
          <th>Market Cap</th>
          <th>Price</th>
          <th>Volume (24h)</th>
          <th>Circulating Supply</th>
          <th>Open (24h)</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Market Cap</th>
          <th>Price</th>
          <th>Volume (24h)</th>
          <th>Circulating Supply</th>
          <th>Open (24h)</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="(value, key, index) in coins" :key="value">
          <th>{{ index + 1 }}</th>
          <td>{{ key }}</td>
          <td>{{ value.USD.MKTCAP }}</td>
          <td>{{ value.USD.PRICE }}</td>
          <td>{{ value.USD.VOLUME24HOUR }}</td>
          <td>{{ value.USD.SUPPLY }}</td>
          <td>{{ value.USD.OPEN24HOUR }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Market",
  data: () => ({
    coins: [],
    errors: [],
  }),
  created() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,LINK,VET&tsyms=USD,EUR"
      )
      .then((response) => {
        this.coins = response.data.DISPLAY;
        console.log(response);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style scoped>
table,
th,
td {
  background-color: white;
  border: 1px solid black;
}
table {
  margin: 3rem 0rem;
}
</style>