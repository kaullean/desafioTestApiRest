import { ProductosMemDAO } from './DAOs/memory';
import { ProductosSql3DAO } from './DAOs/sqlite3';
import { ProductosFSDAO } from './DAOs/fs';
import { ProductosMYSQL3DAO } from './DAOs/mySQL';
import { ProductosMongoDBDAO } from './DAOs/mongoDB';


export enum TipoPersistencia {
  MEMORIA = 'MEM',
  SQLITE3 ='SLQ3',
  FILESYSTEM = 'FS',
  MYSQL = 'MYSQL',
  MONGODB = 'MONGODB',
  MONGOATLAS = 'MONGOATLAS'
}

import path from 'path';

export class NoticiasFactoryDAO {
  
  static get(tipo: TipoPersistencia) {

    switch (tipo) {
      case TipoPersistencia.SQLITE3:
        console.log('Retornando instancia de SQLITE3');
        return new ProductosSql3DAO();

      case TipoPersistencia.FILESYSTEM:
        console.log('Retornando instancia de FILESYSTEM');
        const filePath = path.resolve(__dirname, './DAOs/persistenciaFS.json');
        return new ProductosFSDAO(filePath);

      case TipoPersistencia.MYSQL:
        console.log('Retornando instancia de MYSQL');       
        return new ProductosMYSQL3DAO();

      case TipoPersistencia.MONGODB:
        console.log('Retornando instancia de MONGODB LOCAL');       
        return new ProductosMongoDBDAO(true);

      case TipoPersistencia.MONGOATLAS:
        console.log('Retornando instancia de MONGOATLAS');       
        return new ProductosMongoDBDAO();  
      default:

        console.log('RETORNANDO INSTANCIA CLASE MEMORIA');
        return new ProductosMemDAO();
    }
  }
}