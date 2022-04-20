import { LOCALE_ID, NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import ptBr from "@angular/common/locales/pt";
registerLocaleData(ptBr);

@NgModule({
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
})
export class LocaleModule {}
