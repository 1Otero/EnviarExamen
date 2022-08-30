import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioListComponent } from './components/inventario-list/inventario-list.component';
import { InventarioFormComponent } from './components/inventario-form/inventario-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {InventarioService} from './services/inventario.service'
//Los importamos para unir la vista con el module de forma mucho mejor
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InventarioListComponent,
    InventarioFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //se agregar a los imports estos dos 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //Se agregan los servicios que consumen el api rest
    InventarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
