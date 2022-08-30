import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventarioListComponent} from './components/inventario-list/inventario-list.component'
import {InventarioFormComponent} from './components/inventario-form/inventario-form.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/inventario",
    pathMatch: "full"
  },
  {
    path: "inventario",
    component: InventarioListComponent
  },
  {
    path: "inventario/add",
    component: InventarioFormComponent
  },
  {
    path: "inventario/edit/:id",
    component: InventarioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
