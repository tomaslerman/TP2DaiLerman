/* Módulo OMDBWrapper*/
import axios from "axios";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const APIKEY = "6ee93f34"; // Poné tu APIKEY, esta no funciona.
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page${page}`;
    const apiResponse = await axios.get(requestString);
    returnObject.datos = apiResponse.data.Search;
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    returnObject.respuesta = apiResponse.data.Response;

    return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };

    const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
    const apiResponse = await axios.get(requestString);
    returnObject.datos = apiResponse.data.Search;
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    returnObject.respuesta = apiResponse.data.Response;
    
    return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };

    const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
    const apiResponse = await axios.get(requestString);
    returnObject.datos = apiResponse.data.Search;
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    returnObject.respuesta = apiResponse.data.Response;

    return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};