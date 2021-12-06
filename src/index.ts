import app from './services/server'
import * as axiosTest from './tests/axios';
import * as requestTest from './tests/request';
const puerto = process.env.PORT || 8080;

const server = app.listen(puerto,()=>{
    console.log("SERVER UP EN PUERTO "+puerto);
    
})

/*
 *
 *
 * AXIOS TESTS
 * 
 * 
 * */
// Devuelte un array de todos los productos
// axiosTest.funcionAsyncGetAll();
// Devuelte el producto con ID1
// axiosTest.funcionAsyncGet();
// Crea y Devuelte un producto
// axiosTest.funcionAsyncPost();
// Modifica el producto con ID 3 y lo devuelve
// axiosTest.funcionAsyncPut();
// Borra el producto con ID 2 y lo devuelve
// axiosTest.funcionAsyncDelete();

/*
 *
 *
 * REQUEST TESTS
 * 
 * 
 * */
// // Devuelte un array de todos los productos
// requestTest.requestGetAll()
// // Devuelte el producto con ID1
// requestTest.requestGet()
// // Crea y Devuelte un producto
// requestTest.requestPost()
// // Modifica el producto con ID 3 y lo devuelve
// requestTest.requestPut()
// // Borra el producto con ID 2 y lo devuelve
// requestTest.requestDelete()

server.on('error',(err : Error)=>{
    console.log("Error",err);
});

