import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';

export function useWindowSize(margin) {
const width = ref(window.innerWidth - margin * 2);
const height = ref(window.innerHeight - margin * 2);

const updateSize = () => {
    width.value = window.innerWidth - margin * 2;
    height.value = window.innerHeight - margin * 2;
};

onMounted(() => {
    window.addEventListener('resize', updateSize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSize);
});

// Watch for margin changes and update the size accordingly
watchEffect(() => {
    updateSize();
});

return { width, height };
}