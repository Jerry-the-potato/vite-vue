<script setup>
import { computed, ref} from 'vue';
import Pagination from './Pagination.vue';
import _ from 'lodash';

const props = defineProps({
    rows: Array,
    columns: Array
});

// 搜尋演算法
const filterRows = (rows, filters) => {
    if (_.isEmpty(filters)) return rows

    return rows.filter(row => {
        return Object.keys(filters).every(accessor => {
            const value = row[accessor]
            const searchValue = filters[accessor]

            if (_.isString(value)) {
            return _.toLower(value).includes(_.toLower(searchValue))
            }

            if (_.isBoolean(value)) {
            return (searchValue === "true" && value) || (searchValue === 'false' && !value)
            || (searchValue == true && value) || (searchValue == false && !value)
            }

            if (_.isNumber(value)) {
            return value == searchValue
            }

            return false
        })
    })
}

// 排序演算法
const sortRows = (rows, sort) => {
    return rows.sort((a, b) => {
      const { order, orderBy } = sort
  
      if (_.isNil(a[orderBy])) return 1
      if (_.isNil(b[orderBy])) return -1
  
    //   const aLocale = convertType(a[orderBy])
    //   const bLocale = convertType(b[orderBy])
      const aLocale = (a[orderBy]) + "";
      const bLocale = (b[orderBy]) + "";
  
      if (order === 'asc') {
        return aLocale.localeCompare(bLocale, 'en', { numeric: _.isNumber(b[orderBy]) })
      } else {
        return bLocale.localeCompare(aLocale, 'en', { numeric: _.isNumber(a[orderBy]) })
      }
    })
}
// 定義狀態
const activePage = ref(1);
const filters = ref({});
const sort = ref({ order: 'asc', orderBy: 'id' });
const searchValue = ref('');

const rowsPerPage = 8;
const filteredRows = computed(() => filterRows(props.rows, filters.value));
const sortedRows = computed(() => sortRows(filteredRows.value, sort.value));
const calculatedRows = computed(() => sortedRows.value.slice(
    (activePage.value - 1) * rowsPerPage,
    activePage.value * rowsPerPage
));
const count = computed(() => filteredRows.value.length);
const totalPages = computed(() => Math.ceil(count.value / rowsPerPage));

// 搜尋事件
const handleSearch = (value, accessor) => {
    activePage.value = 1;
    if (value) {
        filters.value = { ...filters.value, [accessor]: value };
    } else {
        const { [accessor]: _, ...updatedFilters } = filters.value;
        filters.value = updatedFilters;
    }
    console.log(filters.value);
}

// 排序事件
const handleSort = accessor => {
    activePage.value = 1;
    sort.value = {
        order: sort.value.order === 'desc' && sort.value.orderBy === accessor ? 'asc' : 'desc',
        orderBy: accessor,
    }
}

// pagination事件
const updateActivePage = (page) => {
    activePage.value = page;
}
</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.accessor">{{ column.label }}</th>
            </tr>
            <tr>
                <th v-for="column in columns" :key="column.accessor">
                    <label><input
                        class="input"
                        :key="'${column.accessor}-search'"
                        type="search"
                        :placeholder="`搜尋${column.label}`"
                        :value="filters[column.accessor] || ''"
                        @input="handleSearch($event.target.value, column.accessor)"
                    /></label>
                    <button @click="handleSort(column.accessor)">{{ (column.accessor === sort.orderBy) ? ((sort.order === 'asc') ? '升序🟢': '降序🔴') : '️排序⚪'}}</button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in calculatedRows" :key="row.id">
                <td v-for="column in columns" :key="column">{{ row[column.accessor] }}</td>
            </tr>
        </tbody>
    </table>
    <Pagination 
        @update:activePage="updateActivePage"
        :activePage="activePage"
        :rowsPerPage="rowsPerPage"
        :count="count"
        :totalPages="totalPages"
    />
</template>
  

<style scoped>
table{
    margin: 10px;
    width: calc(100% - 20px);
    border-color: var(--main-color);
    border-style: ridge;
    border-collapse:collapse;
}
    thead{
        background-color: var(--darker-color);
    }
    tbody tr:nth-child(2n-1){
        color: var(--soft-color);
        background-color: var(--main-color);
    }
    tbody tr:nth-child(2n){
        color: var(--darker-color);
        background-color: var(--soft-color);
    }
        tr{
            font-size: 1.4em;
            height: 1em;
        }
        th:nth-child(1), td:nth-child(1){
            min-width: 2.5em;
        }
        th:nth-child(2), td:nth-child(2){
            min-width: 4.5em;
        }
        th:nth-child(3), td:nth-child(3){
            min-width: 2.5em;
        }
        th:nth-child(4), td:nth-child(4){
            min-width: 1em;
        }
        th:nth-child(5), td:nth-child(5){
            min-width: 2.5em;
        }
            th, td{
                text-align: center;
                vertical-align: bottom;
                padding: 0 0 0 0.4em;
            }
            input{
                font-size: 0.8em;
                width: 90%;
                padding: 0.1em 0.4em 0.1em 0.4em;
                border-radius: 0.5em;
                color: var(--main-color);
                background-color: var(--soft-color);
                /* border-width: 0; */
            }
            button{
                width: auto;
                flex: auto;
                font-size: 1.2rem;
                color: var(--soft-color);
                background-color: transparent;
                border-color: var(--soft-color);
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
                background-color: var(--textbg-color);
                color: var(--main-color);
            }
</style>
  