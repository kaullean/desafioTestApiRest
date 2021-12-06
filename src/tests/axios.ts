import axios from 'axios';
import { request, response } from 'express';

const nuevoProducto = {
    nombre: "productoAxios",
    descripcion: "descripcionAxios",
    codigo: "codigoAxios",
    fotoUrl: "fotourlAxios",
    precio: 101,
    stock: 101,
};

const productoActualizado = {
    nombre: "productoActualizadoAxios",
    descripcion: "descripcionActualizadoAxios",
    codigo: "codigoActualizadoAxios",
    fotoUrl: "fotourlActualizadoAxios",
    precio: 111,
    stock: 111,
};

const urlPost = 'http://localhost:8080/api/productos/agregar';
const urlGet1 = 'http://localhost:8080/api/productos/listar/1';
const urlGetAll = 'http://localhost:8080/api/productos/listar';
const urlPut='http://localhost:8080/api/productos/actualizar/3'
const urlDelete = 'http://localhost:8080/api/productos/borrar/2';

export const funcionAsyncPost = async () => {
  try {
    const resp = await axios.post(urlPost, nuevoProducto);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};
export const funcionAsyncGetAll = async () => {
    axios
    .get(urlGetAll)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
  };
export const funcionAsyncGet = async () => {
axios
.get(urlGet1)
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.error(error.message);
});
};
export const funcionAsyncPut = async () => {
    axios
        .put(urlPut,productoActualizado)
        .then((response) => {
        console.log(response.data);
        })
        .catch((error) => {
        console.error(error.message);
        });
};
export const funcionAsyncDelete = async () => {
    axios
        .delete(urlDelete)
        .then((response) => {
        console.log(response.data);
        })
        .catch((error) => {
        console.error(error.message);
        });
};
