<template>
  <line-chart
    :data="[
      ['Januari', 1170],
      ['Februari', 1617],
      ['March', 1800],
      ['April', 2149],
      ['May', 3438],
      ['June', 2672],
      ['July', 2323],
      ['August', 2724],
      ['September', 3931],
      ['October', 3555],
      ['November', 4608],
      ['december', 4513],
    ]"
    :colors="['#zzz']"
    xtitle="Month"
    ytitle="Dollars"
    prefix="$"
    thousands=","
  ></line-chart>
</template>

<script>
</script>
