<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    activePage: Number,
    count: Number,
    rowsPerPage: Number,
    totalPages: Number,
});

// 定義狀態
const filters = ref({});
const sort = ref({ order: 'asc', orderBy: 'id' });
const searchValue = ref('');

const beginning = computed(() => props.activePage === 1 ? 1 : props.rowsPerPage * (props.activePage - 1) + 1);
const end = computed(() => props.activePage === props.totalPages ? props.count : beginning.value + props.rowsPerPage - 1);
const isDisabled = computed(() => props.activePage === 1);
const isLastDisabled = computed(() => props.activePage === props.totalPages);

const emit = defineEmits(['update:activePage']);
const setActivePage = (page) => {
    emit('update:activePage', page);
    console.log(props.rowsPerPage, props.activePage);
};
</script>

<template>
    <!-- 分頁顯示 -->
    <div class="pagination">
      <div class="pagDescription">
        <p>Page {{ activePage }} of {{ totalPages }}</p>
        <p>Rows: {{ beginning === end ? end : beginning + '-' + end }} of {{ count }}</p>
      </div>
      <button 
        class="button" 
        :disabled="isDisabled" 
        :style="{ opacity: isDisabled ? 0.2 : 1 }" 
        @click="setActivePage(1)"
      >🢀🢀  First</button>
      <button 
        class="button" 
        :disabled="isDisabled" 
        :style="{ opacity: isDisabled ? 0.2 : 1 }" 
        @click="setActivePage(activePage - 1)"
      >🢀 Previous</button>
      <button 
        class="button" 
        :disabled="isLastDisabled" 
        :style="{ opacity: isLastDisabled ? 0.2 : 1 }" 
        @click="setActivePage(activePage + 1)"
      >Next 🢂</button>
      <button 
        class="button" 
        :disabled="isLastDisabled" 
        :style="{ opacity: isLastDisabled ? 0.2 : 1 }" 
        @click="setActivePage(totalPages)"
      >Last 🢂🢂</button>
    </div>
  </template>
  

<style scoped>
.pagination{
    position: absolute;
    width: -webkit-fill-available;
    display: flex;
    bottom: 1em;
    margin: 0.5em;
}
.pagDescription{
    width: 9em;
}
    button{
        width: auto;
        flex: auto;
        font-size: 1.2rem;
        color: var(--darker-color);
        background-color: var(--soft-color);
        border-style: outset;
        border-width: 0.1em;
        border-radius: 0.5em;
        padding: 0.2em 0.5em;
        margin: 0.2em;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    button:hover{
        border-style: inset;
        color: var(--soft-color);
        background-color: var(--main-color);
    }
  
@media (max-width: 992px){
    button{
      font-size: 1em;
      padding: 0.2em 0.2em;
    }
}
</style>
  