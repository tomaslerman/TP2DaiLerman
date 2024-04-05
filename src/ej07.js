import { getCurrency, getCurrencyAbbreviation } from "currency-map-country";
let monedaDelPais, codigoPais;
const obtenerMoneda = (pais)=> getCurrencyAbbreviation(pais);
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);