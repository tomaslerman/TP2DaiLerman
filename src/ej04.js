import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

async function copiar(origen, destino) {
  try {
    // Leer el contenido del archivo
    const contenido = await fs.promises.readFile(origen, 'utf8');

    // Escribir el contenido en el archivo de salida 
    await fs.promises.writeFile(destino, contenido, 'utf8');

    console.log('El contenido se ha copiado correctamente.');
  } catch (error) {
    console.error('Error:', error);
  }
}
