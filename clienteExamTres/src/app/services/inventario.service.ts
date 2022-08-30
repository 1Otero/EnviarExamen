import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Inventario} from '../models/Producto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  ruta = "http://localhost:3307/Inventario";

  constructor(private http: HttpClient) { 

  }

  async getInventarioId(id: string){
    return await this.http.get(`${this.ruta}/producto/${id}`)
  }
  async getInventario(){
    return await this.http.get(`${this.ruta}/`);
  } 
  async saveInventario(producto:Inventario){
    console.log(producto.proveedor)
    //return this.http.post(`${this.ruta}/insertarproducto/`, producto)
    return this.http.put(`${this.ruta}/insertarproducto/`, producto)
  }
  async deleteInventario(id:string){
    console.log(id)
    return this.http.delete(`${this.ruta}/eliminarProducto/${id}/`)
  }
  //Observable<Inventario>
  async updateInventario(id:any, updInventario:any){
    console.log(id, updInventario.Precio)
    //return this.http.put(`${this.ruta}/modificarProducto/${id}`,updInventario)
    return this.http.post(`${this.ruta}/modificarProducto/${id}`,updInventario)
  }
}
