<script setup>
import {onMounted, nextTick, ref} from 'vue'
import SlideMenuBtn from './SlideMenuBtn.vue';
import physic from '../js/physic'
import manager from '../js/animateManager';
const props = defineProps({
  myMouse: Object,
  max: Number,
  ratio: Number
})
const section = ref(null);
defineExpose({
    section
});

const menu = ref(null);
const log = ref(null);
const canvas = ref(null);
onMounted(async () => {
    physic.setCanvas(canvas.value, log.value);
    await nextTick();
    manager.registerAnimationCallback("updateS3", physic.update);
    manager.registerAnimationCallback("renderS3", physic.render);
})
</script>

<template>
    <section ref="section" class="section" id="S3">
        <canvas
            id="canvasS3"
            ref="canvas"
            :width="max * ratio"
            :height="ratio * max * ratio"
        ></canvas>
        <div ref="menu" class="gamemenu">
            <header><h3>粒子系統</h3></header>
            <div id="pathConfig" class="parameter">
                <label>linear :</label>
                <input @change="physic.setPath" type="number" id="leapLinear" value="0"/>
                <label>easein :</label>
                <input @change="physic.setPath" type="number" id="leapEasein" value="-2"/>
                <label>easeout :</label>
                <input @change="physic.setPath" type="number" id="leapEaseout" value="2"/>
            </div>
            <div ref="controlpanel" class="controlpanel">
                <label>★</label>
                <button @click="physic.start" id="bubbleSort">泡沫排序</button>
                <button @click="physic.start" id="selectionSort">選擇排序</button>
                <button @click="physic.start" id="insertionSort">插入排序</button>
                <button @click="physic.start" id="quickSort">快速排序</button>
                <button @click="physic.start" id="mergeSort">合併排序</button>
                <button @click="physic.start" id="heapSort">堆排序</button>
                <button @click="physic.start" id="shellSort">希爾排序</button>
                <button @click="physic.start" id="countingSort">計數排序</button>
                <button @click="physic.start" id="randomSort">打亂</button>
                <button @click="physic.start" id="instantRandomSort">立刻打亂</button>
                <button @click="physic.cancel" id="cancelSort">取消</button>
                <button @click="physic.stepByStep" id="stepByStep">一步一步來</button>
            </div>
            <div ref="log" id="sortLog"><p>碰撞模擬和重力引擎</p></div>
            <SlideMenuBtn :menu="menu" />
        </div>

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
