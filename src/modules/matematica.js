/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
    return x + y;
// No seas vago, acá hay que hacer el cuerpo de la función!!!
};
const multiplicar = (a, b) => a*b;
// No seas vago, acá hay que hacer el cuerpo de la función!!!
function restar(c,d){
return c-d;
};
const dividir = (z,h)=> z/h;
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
const ArrayNum = ["dos", "cuatro", "ocho", "diez"];
export {PI, sumar, multiplicar,restar,dividir,ArrayNum};