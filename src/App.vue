<template>
  <div id="app">
    <div id="logo">
      <img alt="VueJS logo" src="./assets/vue-logo.png">
      <span class="addition">+</span>
      <img alt="ThreeJS logo" src="./assets/three-logo.png">
      <span class="addition">+</span>
      <img alt="TypeScript logo" src="./assets/ts-logo.png">
    </div>
    <HelloWorld3D msg="Hello World 3D!"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld3D from './components/HelloWorld3D/HelloWorld3D.vue';

@Component({
  components: {
    HelloWorld3D,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.addition{
  font-size: 7em;
  margin: 0 20px;
}
</style>
