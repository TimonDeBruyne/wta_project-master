<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "Echart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data: function () {
    return {
      form: {
        formName: "New portfolio",
        userName: "",
      },
      showSubmitFeedback: false,
    };
  },
  methods: {
    fakeSubmit() {
      this.showSubmitFeedback = true;
      setTimeout(() => {
        this.showSubmitFeedback = false;
      }, 3000);
    },
  },
  setup() {
    const option = ref({
      title: {
        text: "Crypto portfolio",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: [
          "Bitcoin",
          "Etherium",
          "High cap alts",
          "Low cap alts",
          "Hidden gems",
        ],
      },
      series: [
        {
          name: "Cryptos",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 50, name: "Bitcoin" },
            { value: 30, name: "Etherium" },
            { value: 10, name: "High cap alts" },
            { value: 5, name: "Low cap alts" },
            { value: 5, name: "Hidden gems" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });

    return { option };
  },
};
</script>

<style scoped>
.chart {
  height: 25rem;
  width: 100%;
}
</style>