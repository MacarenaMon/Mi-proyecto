// class Servicio {
//     constructor(tipo, vehiculo, precio) {
//         this.tipo = tipo;
//         this.vehiculo = vehiculo;
//         this.precio = precio;
//     }
// }
// const servicios = [
//     new Servicio('Practico', 'Auto', 2000 ),
//     new Servicio('Teorico', 'No requiere automovil', 2500),
//     new Servicio('de Estacionamiento', 'Vehiculo a eleccion', 2000)
// ]

// function mostrarServicios() {
//     alert('Nuestra empresa cuenta con los siguiente cursos:');
//     for (const servicio of servicios) {
//         alert(`Curso ${servicio.tipo}`);
//     }

//     pedirDatos();
// }

// function pedirDatos() {
//     const datoUsuario = prompt('¿Qué curso desea contratar?');
//     const servicioEncontrado = servicios.find(servicio => servicio.tipo.toLowerCase() === datoUsuario.toLowerCase());

//     if (servicioEncontrado) {
//         alert(`El curso ${servicioEncontrado.tipo} tiene un costo de $${servicioEncontrado.precio}`)
//     } else {
//         alert('No contamos con ese curso, inténtelo nuevamente');
//         mostrarServicios();
//     }

// }

// mostrarServicios();

const formulario = document.querySelector('#my-form')
const inputNombre = document.querySelector('#input-nombre')
const inputMail = document.querySelector('#input-mail')
const inputCurso = document.querySelector('#input-curso')
const btnEnviar = document.querySelector('#btn-enviar')

inputNombre.addEventListener('keydown', (event) => {

   
    if (inputNombre.value.length <= 4) {
        inputNombre.classList.add('border-danger')
        inputNombre.classList.remove('border-success')
    } else {
        inputNombre.classList.add('border-success')
        inputNombre.classList.remove('border-danger')
    }
})

inputMail.addEventListener('input', () => {


    if (inputMail.value.length <= 8) {
        inputMail.classList.add('border-danger')
        inputMail.classList.remove('border-success')
    } else {
        inputMail.classList.add('border-success')
        inputMail.classList.remove('border-danger')
    }
})


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    
    const userData = {
        nombre: inputNombre.value,
        mail: inputMail.value,
        curso: inputCurso.value
    }

    console.log(userData)
})

