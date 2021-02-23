// Crear la clase Cursos
export class Cursos{
    constructor(nombre, poster, clases){
        this.nombre = nombre
        this.poster = poster
        this.clases = clases
        this.profesor
        this.inscritos = []
    }
    // getters
    getNombre() { return this.nombre}
    getPoster() { return this.poster}
    getClases() { return this.clases}
    getProfesor() { return this.profesor}
    getIncritos() { return this.inscritos}

    // setters
    setNombre(nombre) { this.nombre = nombre}
    setPoster(poster) { this.poster = poster}
    setClases(clases) { this.clases = clases}
    setProfesor() { return this.profesor}
    setIncritos(inscritos) { this.inscritos = inscritos}
}