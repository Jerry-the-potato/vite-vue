<script setup>
import {defineExpose, onMounted, nextTick, ref} from 'vue'
import audioUrl from '../assets/Lovely Piano Song.mp3'
import musicAnalyser from '../js/musicAnalyser';
import manager from '../js/animateManager';
import SlideMenuBtn from './SlideMenuBtn.vue';

const canvas = ref(null);
onMounted(async () => {
    musicAnalyser.setCanvas(canvas.value);
    await nextTick();
    manager.registerAnimationCallback("updateS2", musicAnalyser.update);
    manager.registerAnimationCallback("renderS2", musicAnalyser.render);
    window.addEventListener('resize', musicAnalyser.resize, false);
})

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
</script>

<template>
    <section ref="section" class="section" id="S2">
        <canvas
            id="canvasS2"
            ref="canvas"
            :width="max * ratio"
            :height="ratio * max * ratio"
        ></canvas>
        <audio @play="musicAnalyser.getAnalyser" ref="audio" controls id="myAudio">
                <source :src="audioUrl"></source>
        </audio>
        <!-- <div ref="menu" class="gamemenu">
            <SlideMenuBtn :menu="menu"/>
        </div> -->
    </section>
</template>

<style scoped>
    #myAudio{
        position: absolute;
        left: 10px;
        bottom: 10px;
    }
</style>
