export default class Alumno{
    constructor(nombre,dni,edad){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
    }
    toString()
    {
        return `nombre: ${this.nombre}, dni: ${this.dni}, edad: ${this.edad}`;
    }
        
}