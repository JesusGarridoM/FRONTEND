<template>
<div class="scroll">
    <table>
        <tr class="titulos">
            <th>Nombre</th>
            <th>Sabores</th>
            <th>Adornos</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th></th>
        </tr>
        <tr v-for="pedido in $store.getters.funPedidos" :key="pedido.id">
            <td>{{pedido.nombre}}</td>
            <td>
                <div v-for="sabor in pedido.sabores" :key="sabor.id">
                    <p>{{sabor}}</p>
                </div>
            </td>
            <td>
                <div v-for="adorno in pedido.adornos" :key="adorno.id">
                    <p>{{adorno}}</p>
                </div>
            </td>
            <td>{{pedido.tel}}</td>
            <td>{{pedido.correo}}</td>
            <td><input type="button" value="Enviar"></td>
        </tr>

    </table>
</div>
</template>

<script>
export default {
  name: 'Encabezado'
}
</script>

<style scoped>
table{
    width: 100%;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    display:inline-table;
    
}
th{    
    padding: 30px 0px;
    background: rgba(0, 0, 0, 0.3);
}
td{
    padding: 18px 0px;
    background: rgba(0, 0, 0, 0.6);
}
input{
    padding: 10px 36px;
    background: #F5881F;
    font-weight: 400;
    font-size: 23px;
    line-height: 27px;
    text-transform: uppercase;
    color: #FFFFFF;
}
.titulos{    
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}
.scroll{
    width: 100%;
    height: 440px;
    overflow-y: scroll;
    overflow: auto;
}
</style>