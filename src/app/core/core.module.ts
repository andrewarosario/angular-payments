import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { StorageModule } from "./storage/storage.module";
import { AUTH_USER_STORAGE } from "../services/auth/auth-user-storage.provider";

@NgModule({
  imports: [CommonModule, HttpClientModule, StorageModule],
  providers: [AUTH_USER_STORAGE],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule has already been instantiated. Import it only in AppModule"
      );
    }
  }
}
