<template>
<div class="encabezado">
    <div>
        <router-link to="/cliente"><img src="../assets/logo.png" alt=""></router-link>
    </div>
    <nav>
        <router-link  class="navChild" to="/cliente">Ingresar</router-link>
    </nav>
</div>
</template>


<style scoped>
.encabezado{
    background: rgba(255, 255, 255, 0.1);
    padding: 30px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navChild{
    padding: 22px 55px;
    background-color: rgba(0, 0, 0, 0.20);
    font-weight: 700;
    font-size: 23px;
    color: #DEB887;
    text-transform: uppercase;
}
.navChild:hover{
    color: white;
}
@media screen and (max-width: 1000px){
    nav{
        width: 100%;
        padding: 0px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .encabezado{
        flex-direction: column;
        padding: 0px;  
    }    
    .navChild{
        flex: 1;
    }
}
</style>