<template>
  <div>
    <h2>Bitcoin 2019-2022</h2>
    <svg width="800" height="500"></svg>
  </div>
</template>
<script>
import * as d3 from "d3";
export default {
  data() {
    return {};
  },
  async mounted() {
    const svg = d3.select("svg");
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    const g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    const parseTime = d3.timeParse("%d-%b-%y");
    const x = d3.scaleTime().rangeRound([0, width]);
    const y = d3.scaleLinear().rangeRound([height, 0]);
    const line = d3
      .line()
      .x(function (d) {
        return x(parseTime(d.date));
      })
      .y(function (d) {
        return y(d.close);
      });
    const data = [
      { date: "01-Jan-19", close: 3350.75 },
      { date: "01-Apr-19", close: 4495.17 },
      { date: "01-Jul-19", close: 10005.25 },
      { date: "01-Oct-19", close: 7510.68 },
      { date: "01-Apr-20", close: 5597.37 },
      { date: "01-Jul-20", close: 8122.93 },
      { date: "01-Oct-20", close: 9005.34 },
      { date: "01-Apr-21", close: 48552.46 },
      { date: "01-Jul-21", close: 29230.6 },
      { date: "01-Oct-21", close: 41104.9 },
      { date: "01-Jan-22", close: 40894.78 },
    ];
    x.domain(
      d3.extent(data, function (d) {
        return parseTime(d.date);
      })
    );
    y.domain(
      d3.extent(data, function (d) {
        return d.close;
      })
    );
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(7));
    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end");
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
    /* console.log(svg);
    console.log(g); */
  },
};
</script>
<style scoped></style>