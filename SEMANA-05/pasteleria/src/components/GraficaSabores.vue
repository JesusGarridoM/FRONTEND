<template>
<ul class="seccion">
    <li class="sabor" v-for="item in $store.getters.funSabores" :key="item.id">
        <p class="nombre">{{item.nombre}}</p>
        <p>{{item.stock}}</p>
        <div class="barCom"><div class="barVal" v-bind:style="{width:item.porcen}"></div></div>
    </li>
</ul>
<!-- <div class="seccion">    
    <div class="sabor">
        <p class="nombre">Crema de Cacahuate</p>
        <p>{{$store.state.stockCrCa}}</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="sabor">
        <p class="nombre">Frambuesas</p>
        <p>{{$store.state.stockFr}}</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="sabor">
        <p class="nombre">Mango</p>
        <p>{{$store.state.stockMa}}</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="sabor">
        <p class="nombre">Limon</p>
        <p>{{$store.state.stockLi}}</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="sabor">
        <p class="nombre">Chocolate</p>
        <p>{{$store.state.stockCh}}</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="sabor">
        <p class="nombre">Dulce de leche</p>
        <p>{{$store.state.stockDuLe}}</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
</div> -->
</template>

<script>
export default {
  name: 'GraficaSabores'
}
</script>

<style scoped>
p{
    margin: 0;
}
.seccion{
    width: 50%;
    background: rgba(0, 0, 0, 0.3);
    border-top: 1px solid white;
    margin: 0px;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
}
.sabor{
    padding: 12px 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.nombre{
    width: 154px;
    text-align: left;
}
.barCom{
    width: 408px;
    height: 37px;
}
.barVal{
    width: 100%;
    height: 37px;
    background: linear-gradient(89.95deg, #149086 19.14%, rgba(180, 87, 127, 0.64) 97.1%);
}
</style>