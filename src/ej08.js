import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

let respuesta1 = await OMDBSearchByPage('moana', 1);
let respuesta2 = await OMDBSearchComplete('toy story');
let respuesta3 = await OMDBGetByImdbID('tt0114709');
console.log(respuesta1);
console.log(respuesta2);
console.log(respuesta3);