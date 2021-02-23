//import {formularioInscr} from './formularios.js'
//import {formularioProfe} from './formularios.js'
import {Alumno} from './Usuario.js'
import {Profesor} from './Usuario.js'

const elemCursos = document.getElementById('curso')

export function mostrarCurso(tipoCurso) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${tipoCurso.getPoster()}"/>
    <h3>${tipoCurso.getNombre()}</h3>
    <h5>Cantidad de horas: ${tipoCurso.getClases()}h.</h5>
    <button id="botonAlumno">Inscribirse</button>
    <button id="botonProfesor">Añadir profesor</button>
    `
    let botones = card.querySelectorAll('button')
    for (const boton of botones) {
        boton.addEventListener('click', event => {
            switch(event.target){
                case 'botonAlumno':
                    //formularioInscr()         //Funcionaba y ya no funciona
                    if(confirm('¿Ya estas registrado?')){       //Aqui irian varias comprobaciones
                        alert('Te has inscrito correctamente')
                        //tipoCurso.push([])  //Aqui se introduciria el usuario registrado
                    } else{
                        //document.getElementById('inscripcionAlumno').style.display = 'grid' //Lo mostraria si estuviera oculto
                    }
                    break
                case 'botonProfesor':
                    //formularioProfe()
                    if(tipoCurso.getProfesor() === null){       //Aqui irian varias comprobaciones
                        //document.getElementById('inscripcionProfe').style.display = 'grid' //Lo mostraria si estuviera oculto
                    } else{
                        alert('Este curso ya tiene un profesor')
                    }
                    break
            }
        })
    }
    // agregar como hijo de curso
    elemCursos.appendChild(card)
}