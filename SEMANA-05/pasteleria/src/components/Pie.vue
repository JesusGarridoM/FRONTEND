<template>
<div class="pie">
    <div>
        <div><h3>Horarios</h3></div>
        <div class="datos">
            <p>Martes: 11:00-17:00</p>
            <p>Miercoles: 11:00-17:00</p>
            <p>Jueves: 11:00-17:00</p>
            <p>Viernes: 11:00-17:00</p>
            <p>Sabado: 11:00-14:00</p>
            <p>Domingo: 11:00-14:00</p>
        </div>
    </div>
    <div>
        <div><h3>Contactanos</h3></div>
        <div class="datos">
            <p>Dirección: Estrella #42, Solar, Via Lactea</p>
            <p>Tel: 55 1234 5678</p>
        </div>
    </div>
</div>
</template>


<style scoped>
.pie{
    width: 100%;
    background: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: space-around;
}
.datos{    
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #FFFFFF;
}
@media screen and (max-width: 1000px){
    .pie{
        display: flex;
        flex-direction: column;
    }
    .pie div{
        flex: 1 1 100%;
    }    
}
</style>