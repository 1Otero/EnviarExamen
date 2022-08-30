import { Component, HostBinding, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/Producto';
import { InventarioService } from 'src/app/services/inventario.service';
import {ActivatedRoute ,Router} from '@angular/router'

@Component({
  selector: 'app-inventario-form',
  templateUrl: './inventario-form.component.html',
  styleUrls: ['./inventario-form.component.css']
})
export class InventarioFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  inventario:Inventario= {
    IdProducto: 0,
    Nombre: "",
    Cantidad: 0,
    Estado: 0,
    Precio: 0,
    Lote: 0,
    proveedor: ""
  };

  edit: boolean = false;

  constructor(private inventarios:InventarioService, private router:Router, private activateRoute:ActivatedRoute) { }

  async ngOnInit(){
    const params = this.activateRoute.snapshot.params;
    var id = params['id'];
    if(params['id']){
       var dato = await this.inventarios.getInventarioId(id)
       dato.subscribe(
         res => {
          this.inventario = JSON.parse(JSON.stringify(res))[0];
          console.log(this.inventario)
          this.edit = true;
         },
         err => console.log(err)
       )
    }
  }

  async saveNewProduct(){
    console.log(this.inventario)
    var a = await this.inventarios.saveInventario(this.inventario)
    a.subscribe(
      res => { 
        console.log(res)
        this.inventario = {
          IdProducto: 0,
          Nombre: "",
          Cantidad: 0,
          Estado: 0,
          Precio: 0,
          Lote: 0,
          proveedor: ""
        }
        this.router.navigate(['/inventario'])
      },
      err => console.log(err))
  }
  async editProduct(){
    console.log(this.inventario + " - "+this.inventario.Precio)
    var id =  this.inventario.IdProducto;
    await (await this.inventarios.updateInventario(id,this.inventario))
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/inventario'])
      }, 
      err => console.log(err)
    )     
  }

}
