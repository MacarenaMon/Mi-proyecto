class Servicio {
    constructor(tipo, vehiculo, precio) {
        this.tipo = tipo;
        this.vehiculo = vehiculo;
        this.precio = precio;
    }
}
const servicios = [
    new Servicio('Practico', 'Auto', 2000 ),
    new Servicio('Teorico', 'No requiere automovil', 2500),
    new Servicio('de Estacionamiento', 'Vehiculo a eleccion', 2000)
]

function mostrarServicios() {
    alert('Nuestra empresa cuenta con los siguiente cursos:');
    for (const servicio of servicios) {
        alert(`Curso ${servicio.tipo}`);
    }

    pedirDatos();
}

function pedirDatos() {
    const datoUsuario = prompt('¿Qué curso desea contratar?');
    const servicioEncontrado = servicios.find(servicio => servicio.tipo.toLowerCase() === datoUsuario.toLowerCase());

    if (servicioEncontrado) {
        alert(`El curso ${servicioEncontrado.tipo} tiene un costo de $${servicioEncontrado.precio}`)
    } else {
        alert('No contamos con ese curso, inténtelo nuevamente');
        mostrarServicios();
    }

}

mostrarServicios();