<template>
  <div class="time"><slot name="prefix" /> {{ displayTime }}</div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  timeZone: {
    type: String,
    default: "Europe/Luxembourg",
  },
});

const emit = defineEmits(["datechange"]);

const currentDateTime = ref(new Date());
const displayTime = computed(() =>
  currentDateTime.value.toLocaleString("en-GB", {
    timeZone: props.timeZone,
  })
);

setInterval(() => {
  currentDateTime.value = new Date();
  emit("datechange", displayTime);
}, 1000);
</script>

<style scoped>
.time {
  color: rgb(255, 255, 255);
}
</style>