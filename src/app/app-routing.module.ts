import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login-page/login-page.module").then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: "payments",
    loadChildren: () =>
      import("./pages/payments-page/payments-page.module").then(
        (m) => m.PaymentsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
