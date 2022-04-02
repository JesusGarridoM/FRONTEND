<template>
<div class="adornos">
    <div class="adoTop">
        <h2>Adornos</h2>
    </div>
    <scroll-container class="adoBot">
        <ul>
            <li class="adorno" v-for="item in $store.getters.funAdornos" :key="item.id">
                <img class=img v-bind:src="item.img" alt="">
                <!-- <img class=img src='../assets/ovni.png' alt=""> -->
                <div class="adoMen">
                    <input class="casilla" type="checkbox" v-bind:id="item.nombre" v-bind:value="item.nombre" v-model="$store.state.orden.adorno">
                    <label class="adorNom" v-bind:for="item.nombre">{{item.nombre}}</label>
                    <p>${{item.precio}}</p>
                </div>
            </li>
        </ul>
    </scroll-container>
</div>
</template>


<style scoped>
ul{
    padding: 0px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 80px;
}
.adornos{    
    flex: 1 1 967px;
}
.adoTop{
    /* width: 100%; */
    padding: 43px 10px;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
    border-left: 1px solid white;
}
.adoBot{
    height: 556px;
    background: rgba(0, 0, 0, 0.6);

    display: flex;
    border-left: 1px solid white;

    overflow-y: scroll;
    scroll-behavior: smooth;
    overflow: auto;
}
.adorno{
    width: 200px;
    /* height: 244px; */

}
.img{
    width: 200px;
    height: 200px;
}
.adoMen{    
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.adorNom{
    padding-left: 2px;
    text-align: left;
}
.casilla{
    height: 20px;
    width: 20px;
}
@media screen and (max-width: 1000px){
    .adornos{
        flex: 1 1 100%;
        /* flex-wrap: wrap; */
    }    
    ul{
        padding: 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 80px;
    }
}
</style>