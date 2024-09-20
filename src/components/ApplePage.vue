<script setup>

import { ref } from 'vue';


const heros = ref({
    iphone16pro: {
        learn: "learn/iphone16pro",
        buy: "buy/iphone16pro",
    },
    iphone16: {
        learn: "learn/iphone16",
        buy: "buy/iphone16",
    },
    watch10: {
        learn: "learn/watch10",
        buy: "buy/watch10",
    }
})

const products = ref({
    MacBookPro: {
        h2: "MacBook Pro",
        p: "極致效能，無限創意可能。",
        src: "/vite-vue/src/assets/banner-snowflask.jpg",
        alt: "MacBook",
        learn: "learn/MacBookPro",
        buy: "buy/MacBookPro",
        style: "p-white p-top"
    },
    iPhone16Pro: {
        h2: "iPhone 16 Pro",
        p: "搭載最先進的科技，捕捉每一刻。",
        src: "/vite-vue/src/assets/banner-snowflask.jpg",
        alt: "iPhone 16 Pro",
        learn: "learn/iPhone16Pro",
        buy: "buy/iPhone16Pro",
        style: "p-white p-bottom"
    },
    iPhone16: {
        h2: "iPhone 16",
        p: "精美設計，功能強大，隨時隨地連接。",
        src: "/vite-vue/src/assets/banner-snowflask.jpg",
        alt: "iPhone 16",
        learn: "learn/iPhone16",
        buy: "buy/iPhone16",
        style: "p-white p-top"
    },
    AppleWatch10: {
        h2: "Apple Watch 10",
        p: "你的健康伴侶，隨時掌握身體狀況。",
        src: "/vite-vue/src/assets/banner-snowflask.jpg",
        alt: "Apple Watch 10",
        learn: "learn/AppleWatch10",
        buy: "buy/AppleWatch10",
        style: "p-black p-top"
    },
    iPadPro: {
        h2: "iPad Pro",
        p: "強大的性能，隨時隨地創造。",
        src: "/vite-vue/src/assets/banner-snowflask.jpg",
        alt: "iPad Pro",
        learn: "learn/iPadPro",
        buy: "buy/iPadPro",
        style: "p-white p-top"
    },
    AirPodsPro: {
        h2: "AirPods Pro",
        p: "無線音樂，卓越音質，沉浸式體驗。",
        src: "/vite-vue/src/assets/banner-snowflask.jpg",
        alt: "AirPods Pro",
        learn: "learn/AirPodsPro",
        buy: "buy/AirPodsPro",
        style: "p-white p-top"
    }
});



</script>

<template>
    <header>
        <nav>
            <div id="navContent">
                <div class="logo">
                    <img src="../assets/vue.svg" alt="Apple Logo">
                </div>
                <ul>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">TV & Home</a></li>
                    <li><a href="#">Only on Apple</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <div class="main">
        <section>
            <div class="hero" v-for="(hero, key) in heros" :key="key">
                <div class="hero-content">
                    <a :href="hero.learn" class="cta">了解更多</a>
                    <a :href="hero.buy" class="cta buy">購買</a>
                </div>
            </div>
        </section>

        <section class="products">
            <div class="product-item" v-for="(product, key) in products" :key="key">
                <img :src="product.src" :alt="product.alt">
                <div :class="'product-description ' + product.style">
                    <h2>{{ product.h2 }}</h2>
                    <p>{{ product.p }}</p>
                    <a :href="product.learn" class="cta">了解更多</a>
                    <a :href="product.buy" class="cta buy">購買</a>
                </div>
            </div>
        </section>

        <footer>
            <div class="footer-content">
                <p>© 2024 Apple Inc. 保留一切權利。</p>
            </div>
        </footer>
        </div>
</template>

<style scoped>
div, header{
    margin: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav{
    background-color: #333;
}

#navContent {
    max-width: 992px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: auto;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 14px;
}

#app{
    width: 100%;

}

.hero {
    position: relative;
    background-image: url('/vite-vue/src/assets/banner-snowflask.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 600px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
}

.hero:last-child{
    margin-bottom: 0;
}

.hero-content {
    position: absolute;
    bottom: 5%;
    padding: 20px;
    border-radius: 10px;
}


.hero h1 {
    font-size: 50px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 20px;
}

.cta {
    background-color: #0071e3;
    color: white;
    padding: 11px 21px;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
}
.buy {
    margin: 20px;
    background-color: transparent;
    border: 1px solid #0071e3;
    transition: all 0.4s;
}
.buy:hover{
    background-color: #0071e3;
}

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px 0;
}

.product-item {
    position: relative;
    width: calc(50% - 10px);
    text-align: center;
    margin: 5px 5px;
    overflow: hidden;
}

.product-item img {
    /* width: 100%; */
    height: 500px;
    background-size: cover;
    background-position: center;
}

.product-description{
    position: absolute;
    margin: auto;
    width: -webkit-fill-available;
}
.p-top{
    top: 10%
}
.p-bottom{
    bottom: 10%;
}
.p-white{
    color: white;
}
.p-black{
    color: black;
}

footer {
    background-color: #f8f8f8;
    padding: 20px;
    text-align: center;
    color: #555;
}
</style>
