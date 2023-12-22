const EventEmitter = require( 'events' ) ;// esta fun retorna la clase EventEmitter (por el nombre de la constante);
// definir un evento con el módulo `event`

const emisorDeVenta = new EventEmitter()
//se ocupara el método on() para escuchar y manejar eventos

let valorProducto = 500000;
const iva = valorProducto * 0.2;
emisorDeVenta.on('mensajeCompra', (valor, descuento) => {
    const respuesta = `Se ha realizado una venta por el monto de ${valor - descuento}`;
    return console.info(respuesta);
})


emisorDeVenta.emit('mensajeCompra', valorProducto, iva);