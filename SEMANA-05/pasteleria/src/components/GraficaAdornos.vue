<template>
<ul class="seccion">
    <li class="adorno" v-for="item in $store.getters.funAdornos" :key="item.id">
        <div>
            <p class="nombre">{{item.nombre}}</p>
            <p>{{item.stock}}</p>
        </div>
        <div class="barCom"><div class="barVal" v-bind:style="{width:item.porcen}"></div></div>
    </li>
</ul>
<!-- <div class="seccion">    
    <div class="adorno">
        <p class="nombre">Cometa</p>
        <p>100</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="adorno">
        <p class="nombre">Estrella</p>
        <p>100</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="adorno">
        <p class="nombre">Marte</p>
        <p>100</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="adorno">
        <p class="nombre">Tierra</p>
        <p>100</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
    <div class="adorno">
        <p class="nombre">Ovni</p>
        <p>100</p>
        <div class="barCom"><div class="barVal"></div></div>
    </div>
</div> -->
</template>

<style scoped>
p{
    text-align: left;
}
.seccion{
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
    justify-content: space-between;
    flex: 1 1 50%;
}
.adorno{
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}
.adorno div{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.nombre{
    width: 154px;
}
.barVal{
    width: 100%;
    height: 44px;
    background: linear-gradient(89.95deg, #149086 19.14%, rgba(180, 87, 127, 0.64) 97.1%);
}
</style>