import { NgModule } from "@angular/core";
import { NavbarComponentModule } from "src/app/components/navbar/navbar.component.module";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { HomePageComponent } from "./home-page.component";

@NgModule({
  declarations: [HomePageComponent],
  imports: [HomePageRoutingModule, NavbarComponentModule],
})
export class HomePageModule {}
