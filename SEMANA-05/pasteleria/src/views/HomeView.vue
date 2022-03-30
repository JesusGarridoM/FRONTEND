<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App de Inno"/> -->
    <Encabezado/>
    <div class="principal">
      <Sabores/>
      <Adornos/>
    </div>
    <Pie/>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Encabezado from '@/components/Encabezado.vue'
import Sabores from '@/components/Sabores.vue'
import Adornos from '@/components/Adornos.vue'
import Pie from '@/components/Pie.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    Encabezado,
    Sabores,
    Adornos,
    Pie
  }
}
</script>

<style scoped>
.principal{
  /* width: 100%; */
  display: flex;
}
</style>
