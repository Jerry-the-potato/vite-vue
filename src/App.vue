<template>
  <div id="router-box">
    <nav id="router">
      <router-link to="/">Home</router-link>
      <router-link to="/apple">apple</router-link>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#router-box{
  width: 100%;
  position: fixed;
  top: calc(-1.5em - 10px);
  z-index: 2;
  padding: 10px;
  background-color: var(--darker-color);
  margin: 0;
  transition: top 0.5s;
}
#router-box:hover{
  top: 0;
}
#router{
  width: max-content;
  display: flex;
  gap: 20px;
  align-items: center;
  margin: auto;
}
#router a{
  line-height: 1;
  font-size: 1.5em;
  color: var(--soft-color);
}
#app{
  width: 100%;
}
</style>