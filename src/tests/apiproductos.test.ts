import supertest from 'supertest'
import {productosController} from '../controller/productos'
import {Product , newProduct} from '../models/products/products.interface'
import {expect} from 'chai'
import app from '../services/server'

describe('un test', () =>{
    let request: any;

    beforeAll(() => {
        request = supertest(app);
    });

    test('Deberia recibir un mensaje de error si no existen productos', async () => {
        const mockData: Product[] = [];
    
        const expectedResponse = {
          msg: "No hay productos cargados en el sistema"
        };
        const response = await request.get('/api/productos/listar');
        expect(response.status).to.eql(404);
        expect(response.body).to.deep.equal(expectedResponse);
      });

    test('deberia crear un producto correctamente y asignarle un ID', async () => {
      
      const body = {timestamp:10/10/10, nombre: 'lapiz', descripcion:'Lapiz HB negro', codigo: "codigoLapiz", fotoUrl: "url/lapiz", precio: 100,stock:10};
      const response = await request.post('/api/productos/agregar').send(body);
      
      expect(response.status).to.eql(200);
  
      const producto = response.body.data;
      expect(producto).to.include.keys('_id','timestamp','nombre','descripcion','codigo','fotoUrl','precio','stock');
  
      expect(producto.timestamp).to.equal(body.timestamp);
      expect(producto.nombre).to.equal(body.nombre);
      expect(producto.descripcion).to.equal(body.descripcion);
      expect(producto.fotoUrl).to.equal(body.fotoUrl);
      expect(producto.precio).to.equal(body.precio);
      expect(producto.stock).to.equal(body.stock);
      expect(producto.codigo).to.equal(body.codigo);
    });

    test('Deberia recibir el producto recientemente cargado', async () => {
  
      const expectedResponse = [{
        _id:"1",
        timestamp:10/10/10, 
        nombre: 'lapiz', 
        descripcion:'Lapiz HB negro', 
        codigo: "codigoLapiz", 
        fotoUrl: "url/lapiz", 
        precio: 100,
        stock:10
      }]

      const response = await request.get('/api/productos/listar');
      expect(response.status).to.eql(200);
      expect(response.body.data).to.deep.equal(expectedResponse);
    });
    test('Deberia actualizar un producto', async () => {

      const body={
        timestamp:10/10/10, 
        nombre: 'producto modificado', 
        descripcion:'descripcion modificada', 
        codigo: "codigoLapiz", 
        fotoUrl: "url/lapiz", 
        precio: 100,
        stock:10
      }
      const expectedResponse = {
        _id:"1",
        ...body
      }

      const response = await request.put('/api/productos/actualizar/1').send(body);
      expect(response.status).to.eql(200);
      expect(response.body.data).to.deep.equal(expectedResponse);
    });
    test('Deberia recibir el producto borrado', async () => { 
      const expectedResponse = {
        _id:"1",
        timestamp:10/10/10, 
        nombre: 'producto modificado', 
        descripcion:'descripcion modificada', 
        codigo: "codigoLapiz", 
        fotoUrl: "url/lapiz", 
        precio: 100,
        stock:10
      }

      const response = await request.delete('/api/productos/borrar/1');
      expect(response.status).to.eql(200);
      expect(response.body.data).to.deep.equal(expectedResponse);
    });
   

})