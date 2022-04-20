import { NgModule } from "@angular/core";
import { LogoComponentModule } from "../logo/logo.component.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [LogoComponentModule],
  exports: [NavbarComponent],
})
export class NavbarComponentModule {}
