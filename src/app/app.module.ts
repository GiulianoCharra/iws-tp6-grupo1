import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CheckoutComponent } from "./componentes/checkout/checkout.component";
import {
  NgbPaginationModule,
  NgbModalModule
} from "@ng-bootstrap/ng-bootstrap";
import { EfectivoComponent } from './componentes/formaPago/efectivo/efectivo.component';
import { TarjetaVISAComponent } from './componentes/formaPago/tarjeta-visa/tarjeta-visa.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbPaginationModule, NgbModalModule,RouterModule.forRoot([
      { path: '', component: PedidoComponent },
    ])],
  declarations: [
    AppComponent,
    CheckoutComponent,
    EfectivoComponent,
    TarjetaVISAComponent,
    PedidoComponent,
    MenuBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
