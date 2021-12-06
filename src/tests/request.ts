import request from 'request';

const nuevoProducto = {
    nombre: "productoRequest",
    descripcion: "descripcionRequest",
    codigo: "codigoRequest",
    fotoUrl: "fotourlRequest",
    precio: 202,
    stock: 202,
};

const productoActualizado = {
    nombre: "productoActualizadoRequest",
    descripcion: "descripcionActualizadoRequest",
    codigo: "codigoActualizadoRequest",
    fotoUrl: "fotourlActualizadoRequest",
    precio: 222,
    stock: 222,
};

const urlPost = 'http://localhost:8080/api/productos/agregar';
const urlGet1 = 'http://localhost:8080/api/productos/listar/1';
const urlGetAll = 'http://localhost:8080/api/productos/listar';
const urlPut='http://localhost:8080/api/productos/actualizar/3'
const urlDelete = 'http://localhost:8080/api/productos/borrar/2';

export const requestGetAll = () => {
  const options = {
    method: 'GET',
    url: urlGetAll,
    headers: {},
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body));
  });
};
export const requestGet = () => {
    const options = {
      method: 'GET',
      url: urlGet1,
      headers: {},
    };
  
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(JSON.parse(response.body));
    });
};
export const requestPost = () => {
    const options = {
      method: 'POST',
      url: urlPost,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoProducto),
    };
  
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(JSON.parse(response.body));
    });
  };

export const requestDelete = () => {
    const options = {
        method: 'DELETE',
        url: urlDelete,
        headers: {},
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(JSON.parse(response.body));
    });
};
export const requestPut = () => {
    const options = {
        method: 'PUT',
        url: urlPut,
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(productoActualizado),
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(JSON.parse(response.body));
    });
};