import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersComponent } from "./orders.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
  declarations: [OrdersComponent]
})
export class OrdersModule {}
