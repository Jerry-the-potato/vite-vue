<script setup>
const props = defineProps({
    menu: Object
});
const handleClick = (e) => {
    const m = props.menu;
    const b = e.target;
    const rectMenu = m.getBoundingClientRect();
    const rectButton = b.getBoundingClientRect();
    const height = rectButton.y - rectMenu.y;
    if(b.innerText == "△"){
        m.style.top = "-" + height + "px";
        b.innerText = "▽";
    }
    else{
        m.style.top = "1%";
        b.innerText = "△";
    }
}
</script>

<template>
    <button @click="handleClick" class="slideMenu">△</button>
</template>