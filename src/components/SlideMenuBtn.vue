<script setup>
import { ref } from 'vue';
const props = defineProps({
    menu: Object,
    direction: {
        type: String,
        default: 'left'
    }
});
const isOpen = ref(true);
const handleClick = (e) => {
    isOpen.value = !isOpen.value;

    const m = props.menu;
    const b = e.target;
    const menuRect = m.getBoundingClientRect();
    const buttonRect = b.getBoundingClientRect();
    const positionOffset = {
            "left": buttonRect.x - menuRect.x,
            "top": buttonRect.y - menuRect.y
        };
    m.style[props.direction] = isOpen.value ? "" : "-" + positionOffset[props.direction] + "px";
}
</script>

<template>
    <button @click="handleClick" class="slideMenu">{{isOpen ? "收起△" : "展開▽"}}</button>
</template>