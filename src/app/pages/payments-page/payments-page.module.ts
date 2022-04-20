import { NgModule } from "@angular/core";
import { NavbarComponentModule } from "src/app/components/navbar/navbar.component.module";
import { PaymentsPageRoutingModule } from "./payments-page-routing.module";
import { PaymentsPageComponent } from "./payments-page.component";

@NgModule({
  imports: [PaymentsPageRoutingModule, NavbarComponentModule],
  declarations: [PaymentsPageComponent],
})
export class PaymentsPageModule {}
