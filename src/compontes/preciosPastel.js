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

cantidadPaas.mount('.btn-add');
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
        calcularPrecio2() {
            return precioFinal = this.precio * this.count
        }
    }
})

cantidadPaas2.mount('#card-chocol-2');

const nuevoPastelNuez = Vue.createApp({
    data () {
        return {
            nombreNuez:'Pastel de chocolate con nuez',
            cantidad:  30,
            count: 0,
            precio: 200,
        }
    },
    methods: {
        calcularPrecioNuez(){
            const v = this.count * this.precio
            return this.count > 0  ? v : 'Procesando...'
        },
        disminuirCantidad() {
            return this.count > this.cantidad  ? this.count = 0 : 'TENEMOS SOLO 30 PIEZAS'
        }
    }
})

nuevoPastelNuez.mount('#card-chocol-3');

const nuevoPastelCafe = Vue.createApp({
    data () {
        return {
            nombreCafe:'Pastel de chocolate con cafe',
            cantidad:  10,
            count: 0,
            precio: 250,
            
        }
    },
    methods: {
        calcularPrecioNuez(){
            const v = this.count * this.precio
            return this.count > 0  ? v : 'Procesando...'
        },
        disminuirCantidad() {
            return this.count > this.cantidad  ? this.count = 0 : 'TENEMOS SOLO 30 PIEZAS'
        }
    }
})

nuevoPastelCafe.mount('#card-chocol-4');

const pastelTresLechesChoco = Vue.createApp({
    data () {
        return {
            nombreTresLeches:'Pastel de chocolate con tres leches',
            cantidad:  10,
            count: 0,
            precio: 400,
        }
    },
    methods: {
        calcularPrecioNuez(){
            const v = this.count * this.precio
            return this.count > 0  ? v : 'Procesando...'
        },
        disminuirCantidad() {
            return this.count > this.cantidad  ? this.count = 0 : 'TENEMOS SOLO 30 PIEZAS'
        }
    }
})

pastelTresLechesChoco.mount('#card-chocol-5');

const co = Vue.createApp({
    data () {
        return {
            nombreTresLeches:' Pastel de almendra y chocolate al caramelo ',
            cantidad:  10,
            count: 0,
            precio: 400,
        }
    },
    methods: {
        calcularPrecioNuez(){
            const v = this.count * this.precio
            return this.count > 0  ? v : 'Procesando...'
        },
        disminuirCantidad() {
            return this.count > this.cantidad  ? this.count = 0 : 'TENEMOS SOLO 30 PIEZAS'
        }
    }
})

co.mount('#card-chocol-6');