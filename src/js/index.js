// Importar módulos
import { Cursos } from './Cursos.js'
import { mostrarCurso } from './mostrarCurso.js'
import { Alumno } from './Usuario.js'
import { Profesor } from './Usuario.js'

let alumnos = []
let profesores = []
let listaCursos = []

// acceder al elemento de HTML
const formulario = document.getElementById('formulario')

mostrarCurso(new Cursos('HTML', 'https://rolandocaldas.com/wp-content/uploads/2013/09/javascript-html5.png', 15))

// Funciones
formulario.addEventListener('submit', evento => {
    evento.preventDefault()
    const formObtenido = evento.target
    // crear el nuevo curso
    const curso = new Cursos(formObtenido.nombreCurso.value, formObtenido.rutaImagen.value, formObtenido.cantidadHoras.value)
    // mostrar curso
    listaCursos.push(curso) //Guardo el curso en un array

    mostrarCurso(curso)
    // refrescar formulario
    formObtenido.reset()
})

let formAlumno = document.getElementById('inscripcionAlumno')
formAlumno.addEventListener('submit', evento => {
    evento.preventDefault()
    const formObtenido = evento.target
    // crear el nuevo curso
    const alumno = new Alumno(formObtenido.nombre.value, formObtenido.apellido.value, formObtenido.dni.value, formObtenido.email.value)
    for (const curso of listaCursos) {
        if(curso.nombre === formObtenido.nombre.value){
            alert('Te has inscrito correctamente!!!')
        } else alert('El curso seleccionado no existe')
    }
    // refrescar formulario
    formObtenido.reset()
})

let formProfe = document.getElementById('inscripcionProfe')
formProfe.addEventListener('submit', evento => {
    evento.preventDefault()
    const formProfe = evento.target
    // crear el nuevo curso
    const profe = new Profesor(formProfe.nombre.value, formProfe.apellido.value, formProfe.dni.value, formProfe.email.value, formProfe.numColeg.value)
    for (const curso of listaCursos) {
        if(curso.nombre === formProfe.nombre.value){
            if(curso.getProfesor() != null) alert('Eres el nuevo profesor del curso!!')
            else alert('El curso ya tiene profesor!!')
        } else alert('El curso seleccionado no existe')
    }
    // refrescar formulario
    formProfe.reset()
})