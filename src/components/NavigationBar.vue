<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  width: Number,
});
const isOpen = ref(false);
const handleClick = () => isOpen.value = !isOpen.value;

const links = ref([]);
onMounted(() => {
    const sections = document.getElementById('playground').getElementsByTagName('section');
    links.value = Array.from(sections).map(section => ({
        id: section.id,
    }));
});
</script>

<template>
    <nav id="nav" :style="{left: isOpen ? '0' : -width + 'px'}">
        <div v-for="link in links" :key="link.id">
            <a :href="'#' + link.id" :id="'to' + link.id" class="list">{{ link.id }}</a>
        </div>
        <!-- <a v-for="link in links" :key="link.id" :href="'#' + link.id" :id="'to' + link.id" class="list">{{ link.id }}</a> -->
        <div @click="handleClick" id="navSlider">
            <p>{{isOpen ? "X": "≡"}}</p>
        </div>
    </nav>
</template>

<style scoped>
div{
  margin: 0;
}
nav{
  position: fixed;
  top: 0;
  left: 0px;
  width: 250px;
  height: 100%;
  z-index: 2;
  background-color: var(--darker-color);
  transition: all 0.5s ease-in-out;
}
nav a{
  display: block;
  padding: 0.6em;
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
  color: var(--textbg-color);
}
nav a:hover{
  background-color: var(--main-color);
  color: var(--soft-color);
}
#navSlider{
  position: fixed;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  margin: 0;
  font-size: 20px;
  border-radius: 15px;
  z-index: 2;
  background-color: var(--textbg-color);
}
#navSlider:hover{
  background-color: var(--soft-color);  
}
#navSlider p{
    margin: 0;
    text-align: center;
    font-weight: 900;
    color: #222;
    pointer-events: none;
}
</style>
