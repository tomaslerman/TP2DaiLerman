let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL)
{
const urlObjeto = new URL(laURL);
return {
    host: urlObjeto.host,
    pathname: urlObjeto.pathname,
    parametros: {
        curso: urlObjeto.searchParams.get('curso'),
        mes: urlObjeto.searchParams.get('mes')
    }
};
}