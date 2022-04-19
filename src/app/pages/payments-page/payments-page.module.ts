import { NgModule } from "@angular/core";
import { PaymentsPageRoutingModule } from "./payments-page-routing.module";
import { PaymentsPageComponent } from "./payments-page.component";

@NgModule({
  imports: [PaymentsPageRoutingModule],
  declarations: [PaymentsPageComponent],
})
export class PaymentsPageModule {}
