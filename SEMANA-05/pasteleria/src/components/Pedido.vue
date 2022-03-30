<template>
<div class="seccion">
    <div class="principal">
        <div class="scroll">
            <div><h2>Tu Pastel</h2></div>
            <ul class="datos">
                <li class="dato"><p>Base</p><p>$200</p></li>
                <li class="dato" v-for="item in $store.getters.orden.sabor" :key="item.id">
                    <p>{{item}}</p>
                    <p>${{$store.getters.saborPrecio(item)}}</p>
                </li>
                <li class="dato" v-for="item in $store.getters.orden.adorno" :key="item.id">
                    <p>{{item}}</p>
                    <p>${{$store.getters.adornoPrecio(item)}}</p>
                </li>
            </ul>
        </div>
        <div class="total">
            <p>Total</p>
            <p>${{$store.getters.total}}</p>
        </div>
    </div>
</div>
</template>


<script>
export default {
  name: 'Pedido'
}
</script>

<style scoped>
.seccion{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.principal{
    background: rgba(0, 0, 0, 0.3);
    padding: 30px 40px;
}
.scroll{
    height: 430px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    overflow: auto;
    overflow-x: hidden;
}
.datos{
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    width: 420px;
}
.dato{
    padding-right: 20px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;

    display: flex;
    justify-content: space-between;
}
.total{    
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    text-transform: uppercase;
    justify-content: space-between;
}

</style>