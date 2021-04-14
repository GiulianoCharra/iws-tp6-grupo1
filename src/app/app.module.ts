import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CheckoutComponent } from "./componentes/checkout/checkout.component";
import { ProductosComponent } from "./componentes/productos/productos.component";
import { CategoriasComponent } from "./componentes/categorias/categorias.component";
import {
  NgbPaginationModule,
  NgbModalModule
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbPaginationModule, NgbModalModule],
  declarations: [
    AppComponent,
    CategoriasComponent,
    ProductosComponent,
    CheckoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
