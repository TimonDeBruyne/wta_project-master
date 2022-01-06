<template>
  <bar-chart
    adapter="highcharts"
    :data="[
      ['Vet', 416662],
      ['Link', 53332],
      ['Sol', 4999950],
    ]"
    xtitle="Altcoin"
    ytitle="Dollars"
    prefix="$"
    thousands=","
    :colors="['#zzz']"
  ></bar-chart>
</template>
<script>
</script>