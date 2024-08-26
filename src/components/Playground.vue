<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { useWindowSize } from './composables/useWindowSize';
import CanvasSectionS1 from './CanvasSectionS1.vue';
import CanvasSectionS2 from './CanvasSectionS2.vue';
import CanvasSectionS3 from './CanvasSectionS3.vue';
import manager from '../js/animateManager.js';
import myMouse from '../js/myMouse.js';

const props = defineProps({
  margin: Number,
})

const breakpoint = 992 - props.margin * 2;
const { width, height } = useWindowSize(props.margin);
const max = computed(() => getMax(width.value, height.value));
const ratio = computed(() => (width.value > breakpoint) ? 1 : 2);
function getMax(w, h){
    if(w > breakpoint) return (w < h ? w : h);
    else return (w*2 < h ? w : h/2);
}

function handleMouseMove(e) {
  const rect = e.target.getBoundingClientRect();
  
  const a = ratio.value * ((e.pageX - rect.x)); // / (rect.width);
  const b = ratio.value * ((e.pageY - rect.y)); // / (rect.height);
  const frames = 30;
  myMouse.NewTarget(a, b, frames);
}

// 為動畫管理員指定交互觀測的DOM對象
const sectionRef1 = ref(null);
const sectionRef2 = ref(null);
const sectionRef3 = ref(null);
onMounted(() => {
    const elements = [sectionRef1, sectionRef2, sectionRef3].map((ref) => {
        if(ref.value.section) return ref.value.section;
    })
    manager.addSubjectElements(elements)
    manager.registerAnimationCallback("validIn:S1,S2,S3", myMouse.NextFrame);
});

</script>

<template>
    <div id="playground" @mousemove="handleMouseMove"
        :style="{ 
            width: max + 'px',
            height: max * ratio + 'px',
            margin: margin + 'px auto' 
        }">
        <CanvasSectionS1 ref="sectionRef1" :max="max" :ratio="ratio"/>
        <CanvasSectionS2 ref="sectionRef2" :max="max" :ratio="ratio"/>
        <CanvasSectionS3 ref="sectionRef3" :max="max" :ratio="ratio"/>
    </div>
</template>

<style scoped>
    #playground{
        background-color: bisque;
        position: relative;
        aspect-ratio: 1/1;
        margin: 20px auto;
        /* background-color: #000; */
        border-radius: 2rem;
        overflow: hidden;
        scroll-behavior: smooth;
        transition: all 0.5 ease-out;
    }
</style>
