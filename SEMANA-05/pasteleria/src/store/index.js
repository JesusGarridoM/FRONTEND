import { createStore } from 'vuex'

export default createStore({
  state: {
    productos:{
      sabores:{
        "Dulce de leche":{
          nombre: "Dulce de leche",
          stockIn: 10,
          stock: 10,
          precio: 40,
          porcen: "100%"
        },
        "Chocolate":{
          nombre: "Chocolate",
          stockIn: 10,
          stock: 10,
          precio: 50,
          porcen: "100%"
        },
        "Limon":{
          nombre: "Limon",
          stockIn: 10,
          stock: 10,
          precio: 60,
          porcen: "100%"
        },
        "Mango":{
          nombre: "Mango",
          stockIn: 10,
          stock: 10,
          precio: 70,
          porcen: "100%"
        },
        "Crema de cacahuate":{
          nombre: "Crema de cacahuate",
          stockIn: 10,
          stock: 10,
          precio: 80,
          porcen: "100%"
        },
        "Frambuesa":{
          nombre: "Frambuesa",
          stockIn: 10,
          stock: 10,
          precio: 90,
          porcen: "100%"
        }
      },
      adornos:{
        "Ovni":{
          nombre: "Ovni",
          stockIn: 10,
          stock: 10,
          precio: 40,
          img: require('../assets/ovni.png')
        },
        "Tierra":{
          nombre: "Tierra",
          stockIn: 10,
          stock: 10,
          precio: 50,
          img: require('../assets/tierra.png')
        },
        "Marte":{
          nombre: "Marte",
          stockIn: 10,
          stock: 10,
          precio: 60,
          img: require('../assets/marte.png')
        },
        "Estrella":{
          nombre: "Estrella",
          stockIn: 10,
          stock: 10,
          precio: 70,
          img: require('../assets/estrella.png')
        },
        "Cometa":{
          nombre: "Cometa",
          stockIn: 10,
          stock: 10,
          precio: 80,
          img: require('../assets/cometa.png')
        }
      }
    },
    orden:{
      nombre: "",
      tel: "",
      correo: "",
      sabor: [],
      adorno: [],
      total: 0
    },
    pedidos:[
      {
        nombre: "Juan Ortiz",
        sabores: ["Chocolate","Frambuesa"],
        adornos: ["Estrella"],
        tel: "5511111111",
        correo: "juan@correo.com",
      },
      {
        nombre: "Leticia Nuñez",
        sabores: ["Mango"],
        adornos: ["Tierra","Estrella","Ovni"],
        tel: "5522222222",
        correo: "lety@correo.com",
      },
      {
        nombre: "Patricia Gonzalez",
        sabores: ["Dulce de leche",],
        adornos: ["Marte"],
        tel: "5533333333",
        correo: "paty@correo.com",
      },
      {
        nombre: "Leonardo Calderon",
        sabores: ["Crema de cacahuate","Chocolate"],
        adornos: ["Cometa","Estrella"],
        tel: "5544444444",
        correo: "leo@correo.com",
      }
    ]
  },
  getters: {
    funPedidos(state){
      return state.pedidos
    },
    funSabores(state){
      return state.productos.sabores
    },
    funAdornos(state){
      return state.productos.adornos
    },
    orden(state){
      return state.orden;
    },
    total(state){
      return state.orden.total;
    },
    saborPrecio: (state) => (clave)=>{
      return state.productos.sabores[clave].precio;
    },
    adornoPrecio: (state) => (clave)=>{
      return state.productos.adornos[clave].precio;
    }
  },
  mutations: {
    suma(state){
      let res=200
      console.log(state.orden.sabor)
      for (let valor of state.orden.sabor) {
        res+=state.productos.sabores[valor].precio;
      }
      for (let valor of state.orden.adorno) {
        res+=state.productos.adornos[valor].precio;
      }
      state.orden.total=res;
    },
    enviarPedido(state){
      state.pedidos.push({
        nombre: state.orden.nombre,
        sabores: state.orden.sabor,
        adornos: state.orden.adorno,
        tel: state.orden.tel,
        correo: state.orden.correo,
      })
      alert('Pedido enviado')
    },
    actualizarGraficas(state){
      for (const key in state.productos.sabores) {
        state.productos.sabores[key].stock=state.productos.sabores[key].stockIn
      }
      for (const key in state.productos.adornos) {
        state.productos.adornos[key].stock=state.productos.adornos[key].stockIn
      }
      for (const pedido of state.pedidos) {
        for (const saborPedido of pedido.sabores) {
          state.productos.sabores[saborPedido].stock--;         
        }          
      }
      for (const pedido of state.pedidos) {
        for (const adornoPedido of pedido.adornos) {
          state.productos.adornos[adornoPedido].stock--;         
        }          
      }
      for (const key in state.productos.sabores) {
        let porcen=(state.productos.sabores[key].stock/10)*100
        state.productos.sabores[key].porcen=porcen+"%"
      }
      for (const key in state.productos.adornos) {
        let porcen=(state.productos.adornos[key].stock/10)*100
        state.productos.adornos[key].porcen=porcen+"%"
      }
    }
  },
  actions: {
    async actualizarPedido({commit}){
      commit("suma")
    }
  },
  modules: {
  }
})
