import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { StorageModule } from "./storage/storage.module";
import { AUTH_USER_STORAGE } from "../services/auth/auth-user-storage.provider";
import { LocaleModule } from "./locale/locale.module";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { MatPaginatorIntlPtBr } from "./mat-paginator-intl-pt-br/mat-paginator-intl-pt-br";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StorageModule,
    LocaleModule,
    MatNativeDateModule,
  ],
  providers: [
    AUTH_USER_STORAGE,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtBr },
  ],
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
