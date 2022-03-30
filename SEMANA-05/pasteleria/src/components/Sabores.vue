<template>
<div class="sabores">
    <div class="sabTop">
        <h2>Sabores</h2>
    </div>
    <ul class="sabBot">
        <li class="sabor" v-for="item in $store.getters.funSabores" :key="item.id">
            <!-- <input class="casilla" type="checkbox" v-bind:id="item.nombre" v-bind:value="item.nombre" v-model="toggle">
            <label class="saborNom" v-bind:for="item.nombre">{{item.nombre}}</label> -->
            <input class="casilla" type="checkbox" v-bind:id="item.nombre" v-bind:value="item.nombre" v-model="$store.state.orden.sabor">
            <label class="saborNom" v-bind:for="item.nombre">{{item.nombre}}</label>
            <p>${{item.precio}}</p>
        </li>
    </ul>
</div>
</template>


<script>
export default {
  name: 'Sabores',

}
</script>

<style scoped>
.sabores{    
    flex: 0 0 453px;
    /* margin: 43px 10px; */
}
.sabTop{
    /* width: 100%; */
    padding: 43px 10px;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
}
.sabBot{
    padding: 50px 37px;
    margin: 0px;
    background: rgba(0, 0, 0, 0.6);
}
.sabor{    
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.casilla{
    height: 20px;
    width: 20px;
}
.saborNom{
    width: 280px;
    text-align: left;
}
</style>