/**  */

const cantidadPaas = Vue.createApp({
    data () {
        return {
            cantidad:  20, 
            count: 0,
            precio: 120,
            name:'Pastel de chocolate',
            showModal: false,
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



/**  chocolate - 2 */

const cantidadPaas2 = Vue.createApp({
    data () {
        return {
            nombre:'Pastel de chocolate con frutas',
            cantidad:  10,
            count: 0,
            precio: 200,
        }
    },
    methods: {
        contadorVentasFrutas() {
            return this.count > 9 ? this.count = 0 :   'TENEMOS SOLO 10 PIEZAS'
            
        },
    }
})

cantidadPaas2.mount('#card-chocol-2')
cantidadPaas.mount('.btn-add')