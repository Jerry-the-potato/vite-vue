<script setup>
import {defineExpose, ref} from 'vue'
const props = defineProps({
  myMouse: Object,
  max: Number,
  ratio: Number
})
const section = ref(null);
defineExpose({
    section
});
</script>

<template>
    <section ref="section" class="section" id="S2">
        <canvas
            id="canvasS1"
            ref="canvas"
            :width="max * ratio"
            :height="ratio * max * ratio"
        ></canvas>
        <canvas
            id="bitmap"
            ref="bitmap"
            :width="max * ratio"
            :height="ratio * max * ratio"
        ></canvas>
        <!-- <MenuS1 :manager="manager" :lokaVolterra="lokaVolterra" /> -->
    </section>
</template>

<style scoped>
    section{
        position: relative;
        width: 100%;
        height: 100%;
    }
    canvas{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
