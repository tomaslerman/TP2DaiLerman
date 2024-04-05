let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL)
{
    let Objeto = {
        host: null,
        pathname:null,
        parametros:null
    }
    try 
    {
        const urlObjeto = new URL(laURL);

        Objeto.host = urlObjeto.host
        Objeto.pathname= urlObjeto.pathname
        Objeto.parametros= {
            curso: urlObjeto.searchParams.get('curso'),
            mes: urlObjeto.searchParams.get('mes')
        };
    }
    catch(e)
    {
        console.log(e instanceof TypeError);
    }
    return Objeto;
}