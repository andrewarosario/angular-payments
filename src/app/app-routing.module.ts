import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth/auth.guard";
import { LoggedUserGuard } from "./guards/logged-user/logged-user.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    canLoad: [LoggedUserGuard],
    loadChildren: () =>
      import("./pages/login-page/login-page.module").then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: "payments",
    canLoad: [AuthGuard],
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
