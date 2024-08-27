<script setup>
import { nextTick, onMounted, ref, reactive} from 'vue'
import lokaVolterra from '../js/lokaVolterra.js'
import manager from '../js/animateManager.js';
import SlideMenuBtn from './SlideMenuBtn.vue';
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
    // 我在manager寫了缺失ID的警告，
    // 由父元件進行設定(交互觀測)前，是沒有ID的，所以延後註冊動畫
    await nextTick();
    // 不等待，雖然可行，但不建議
    manager.registerAnimationCallback("renderS1", lokaVolterra.render);
    manager.registerAnimationCallback("updateS1", lokaVolterra.update);
});

const state = reactive({
    useMouse: 0,
    isTransform: 0,
    alpha: 5,
    beta: 10,
    gamma: 5,
    delta: 10,
    dlength: 10,
    speed: 10
});
lokaVolterra.algorithm.updateData(state);
const handleCanvasControl = (e) => {
    const ID = e.target.id;
    const value = e.target.value;
    if(state[ID] == undefined){
        console.warn("invalid key(ID): " + ID + ", check whether it is in object state");
        return;
    }
    state[ID] = value * 1;
    lokaVolterra.algorithm.updateData(state);
}

const isMain = ref(true);
const isWorker = ref(true);
const handlePauseMain = () => {
    isMain.value = !isMain.value;
    const name = (isMain.value ? "resume" : "pause") + "AnimationByName";
    manager[name]("renderS1");
    manager[name]("updateS1");
}
const handlePauseWorker = () => {
    isWorker.value = !isWorker.value;
    lokaVolterra["pauseWorker"](isWorker.value);
}

const menu = ref(null);
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
        <div ref="menu" class="gamemenu">
            <header id="header"><h3>Lotka Volterra 實驗場 + Web Woker</h3></header>
            <div class="parameter">
                <label>Alpha</label><input @input="handleCanvasControl" type="number" id="alpha" :value="state.alpha"></input>
                <label>Beta</label><input @input="handleCanvasControl" type="number" id="beta" :value="state.beta"></input>
                <label>Gamma</label><input @input="handleCanvasControl" type="number" id="gamma" :value="state.gamma"></input>
                <label>Delta</label><input @input="handleCanvasControl" type="number" id="delta" :value="state.delta"></input>
                <label>Vector Size</label><input @input="handleCanvasControl" type="number" id="dlength" :value="state.dlength"></input>
                <label>Transform Speed</label><input @input="handleCanvasControl" type="number" id="speed" :value="state.speed"></input>
            </div>
            <div class="controlpanel">
                <label>★</label>
                <button @click="handleCanvasControl" id="useMouse" :value="state.useMouse ? 0 : 1">{{state.useMouse ? "取消跟隨" : "跟隨滑鼠"}}</button>
                <button @click="handleCanvasControl" id="isTransform" :value="state.isTransform ? 0 : 1">{{state.isTransform == "1" ? "取消縮}放" : "加入縮放"}}</button>
                <button @click="handlePauseMain" id="pauseMain">{{isMain ? "停止(左)" : "開始(左)"}}</button>
                <button @click="handlePauseWorker" id="pauseWorker">{{isWorker ? "停止(右)" : "開始(右)"}}</button>
            </div>
            <div id="dialogbox"><p id="dialog">∫此微分方程用於描述捕食者和獵物的此消彼長，沿著中心點呈現漩渦紋理</p></div>
            <SlideMenuBtn :menu="menu"/>
        </div>
    </section>
</template>

<style scoped>
@media (max-width: 992px){
  /* 遊戲介面架構 */
  .gamemenu{
    height: 200px;
    font-size: 1rem;
}
    .gamemenu .parameter{
        display: flex;
        height: 6em;
        width: 15em;
        flex-direction: column;
        flex-wrap: wrap;
        font-size: 1em;
        transition: all 1s ease-in-out;
    }
        .gamemenu .parameter label{
            flex: 1 0 15%;
            margin: 0;
        }
        .gamemenu .parameter input{
            flex: 1 0 10%;
            margin: 0 2em 0 0;
        }
        .gamemenu .controlpanel button:focus, .gamemenu .parameter input:focus{
            opacity: 1;
        }
}

</style>
