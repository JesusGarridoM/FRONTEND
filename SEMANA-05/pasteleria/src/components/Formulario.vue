<template>
    <form class="seccion"  @submit="$store.commit('enviarPedido')">
        <div class="datos">
            <div class="dato">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" v-model="$store.state.orden.nombre" required>
            </div>
            <div class="dato">
                <label for="tel">Teléfono</label>
                <input type="tel" id="tel" maxlength="10" v-model="$store.state.orden.tel" required>
            </div>
            <div class="dato">
                <label for="corel">Correo Electrónico</label>
                <input type="email" id="corel" v-model="$store.state.orden.correo" required>
            </div>
        </div>
        <div>
            <input type="submit" value="Enviar pedido">
        </div>
    </form>
</template>

<script>
export default {
  name: 'Formulario'
}
</script>

<style scoped>
label{
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}
input{
    width: 100%;
    height: 40px;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000;
}
input[type=submit]{
    width: 355px;
    height: 100px;
    background: #F5881F;
    margin: 45px 10px;
    font-weight: 700;
    font-size: 35px;
    line-height: 41px;
    text-transform: uppercase;
    color: #FFFFFF;    
}
.seccion{
    width: 50%;
}
.datos{
    padding: 49px 72px;
    margin: 73px 150px;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.dato{
    text-align: left;
}
</style>