import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponentModule } from "src/app/components/navbar/navbar.component.module";
import { PaymentsPageRoutingModule } from "./payments-page-routing.module";
import { PaymentsPageComponent } from "./payments-page.component";

@NgModule({
  imports: [PaymentsPageRoutingModule, NavbarComponentModule, MatButtonModule],
  declarations: [PaymentsPageComponent],
})
export class PaymentsPageModule {}
