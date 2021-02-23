class Usuario {
    // Dentro tendremos la función constructora, pero se llama método contructor
    // Método Constructor
    constructor(nombre, apellido, dni, email){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.dni = dni
        this.inscritos = []
    }
    // getters
    getNombre() { return this.nombre}
    getApellido() { return this.apellido}
    getDni() { return this.dni}
    getEmail() { return this.email}
    getIncritos() { return this.inscritos}

    // setters
    setNombre(nombre) { this.nombre = nombre}
    setApellido(apellido) { this.apellido = apellido}
    setDni() { return this.dni}
    setEmail(email) { this.email = email}
    setIncritos(inscritos) { this.inscritos = inscritos}
}

export class Alumno extends Usuario{
    constructor(nombre, apellido, dni, email){
        super(nombre, apellido, dni, email)
        this.cursosInscrito = []
    }
}
export class Profesor extends Usuario{
    constructor(nombre, apellido, dni, email, numColegiado){
        super(nombre, apellido, dni, email)
        this.numeroColegiado = numColegiado
        this.cursosImparte = []
    }
}