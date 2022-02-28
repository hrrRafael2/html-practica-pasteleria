/**  */

const cantidadPaas = Vue.createApp({
    data () {
        return {
            cantidad:  20, 
            count: 0,
            precio: 120,
            name:'Pastel de chocolate',

        }
    },
    methods: {
        calculateBooksMessage() {
        return this.count > 19 ? this.count = 0 : '  TENEMOS 20 PIEZAS'
       
        },
        calcularPrecio() {
            return this.count > 0 ? this.count * this.precio: 'Procesando...'
        }
    }  
    
})

cantidadPaas.mount('.btn-add')

