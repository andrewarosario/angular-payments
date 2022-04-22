import { NgModule } from "@angular/core";
import {
  CurrencyMaskConfig,
  CurrencyMaskInputMode,
  NgxCurrencyModule,
} from "ngx-currency";

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
  imports: [NgxCurrencyModule.forRoot(customCurrencyMaskConfig)],
  exports: [NgxCurrencyModule],
})
export class CurrencyModule {}
