import { Component, HostBinding, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {InventarioService} from '../../services/inventario.service';

@Component({
  selector: 'app-inventario-list',
  templateUrl: './inventario-list.component.html',
  styleUrls: ['./inventario-list.component.css']
})
export class InventarioListComponent implements OnInit {

   @HostBinding("class") classes = 'row'

  constructor(private inventarioService:InventarioService, private router:Router) { }
  inventario: any = [];

  async ngOnInit() {
    this.getdata()
  }
  async getdata(){
    var datoo = await this.inventarioService.getInventario();
    datoo.subscribe(
      res=>{
        this.inventario = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }
  async deleteProducto(id:string){
    
     var dato = await this.inventarioService.deleteInventario(id);
     dato.subscribe(
      res=>{
        console.log(res)
      },
      err => console.log(err)
    )
    this.getdata()
  }
  /*editProduct(id:string){
     this.inventarioService.getInventarioId(id)
     //this.router.navigate(['/inventario/add']) 
  }*/
}
