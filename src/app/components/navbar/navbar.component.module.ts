import { NgModule } from "@angular/core";
import { LogoComponentModule } from "../logo/logo.component.module";
import { MatMenuModule } from "@angular/material/menu";
import { NavbarComponent } from "./navbar.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [NavbarComponent],
  imports: [LogoComponentModule, MatMenuModule, MatIconModule],
  exports: [NavbarComponent],
})
export class NavbarComponentModule {}
