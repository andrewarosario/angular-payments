import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponentModule } from "src/app/components/navbar/navbar.component.module";
import { PaymentsPageRoutingModule } from "./payments-page-routing.module";
import { PaymentsPageComponent } from "./payments-page.component";
import { PaymentsTableModule } from "./payments-table/payments-table.module";

@NgModule({
  imports: [
    PaymentsPageRoutingModule,
    NavbarComponentModule,
    MatButtonModule,
    PaymentsTableModule,
  ],
  declarations: [PaymentsPageComponent],
})
export class PaymentsPageModule {}
