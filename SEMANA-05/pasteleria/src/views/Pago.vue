<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App de Inno"/> -->
    <EncabezadoPago/>
    <div class="principal">
      <Formulario/>
      <Pedido/>
    </div>
    <Pie/>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import EncabezadoPago from '@/components/EncabezadoPago.vue'
import Formulario from '@/components/Formulario.vue'
import Pedido from '@/components/Pedido.vue'
import Pie from '@/components/Pie.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    EncabezadoPago,
    Formulario,
    Pedido,
    Pie
  }
}
</script>

<style scoped>
.principal{
  /* width: 100%; */
  display: flex;
}
@media screen and (max-width: 1300px){
    .principal{
        padding: 0px;  
        flex-direction: column-reverse;
    }    
}
</style>
