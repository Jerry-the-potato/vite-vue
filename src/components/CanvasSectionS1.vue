<script setup>
import {defineExpose, nextTick, onMounted, ref} from 'vue'
import lokaVolterra from '../js/lokaVolterra.js'
import manager from '../js/animateManager.js';
const props = defineProps({
    max: Number,
    ratio: Number
})
const section = ref(null);
defineExpose({
    section
});
const canvas = ref(null);
const bitmap = ref(null);
onMounted(async () =>{
    lokaVolterra.setCanvas(canvas.value, bitmap.value);
    // 不是必需的
    // 我在manager寫了一個警告，
    // 由父元件進行設定(監聽頁面)前，是沒有ID的，此時註冊動畫雖然可行，但不建議
    console.log(manager);
    await nextTick();
    manager.registerAnimationCallback("renderS1", lokaVolterra.render);
    manager.registerAnimationCallback("updateS1", lokaVolterra.update);
});
</script>

<template>
    <section ref="section" class="section" id="S1">
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
