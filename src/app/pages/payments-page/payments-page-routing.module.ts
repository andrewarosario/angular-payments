import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PaymentsPageComponent } from "./payments-page.component";

const routes: Routes = [
  {
    path: "",
    component: PaymentsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsPageRoutingModule {}
