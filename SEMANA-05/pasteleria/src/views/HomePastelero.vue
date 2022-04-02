<template>
<EncabezadoPastelero/>
<div>
  <TablaPedidos/>
  <div class="graficas">
    <GraficaSabores/>
    <GraficaAdornos/>
  </div>
</div>
</template>


<script>
import EncabezadoPastelero from '@/components/EncabezadoPastelero.vue'
import TablaPedidos from '@/components/TablaPedidos.vue'
import GraficaSabores from '@/components/GraficaSabores.vue'
import GraficaAdornos from '@/components/GraficaAdornos.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    EncabezadoPastelero,
    TablaPedidos,
    GraficaSabores,
    GraficaAdornos
  }
}
</script>

<style scoped>
.graficas{
  display: flex;
}
@media screen and (max-width: 600px){
    .graficas{
        flex-direction: column;
    }    
}
</style>