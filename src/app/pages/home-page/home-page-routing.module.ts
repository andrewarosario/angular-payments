import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "payments",
      },
      {
        path: "payments",
        loadChildren: () =>
          import("../payments-page/payments-page.module").then(
            (m) => m.PaymentsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
