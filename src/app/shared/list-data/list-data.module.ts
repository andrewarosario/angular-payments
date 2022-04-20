import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { LIST_DATA_API } from "./interfaces/list-data-api.interface";
import { ListDataDirective } from "./directives/list-data/list-data.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [ListDataDirective],
  exports: [ListDataDirective],
})
export class ListDataModule {
  static forRoot<T>(dataApi: Type<T>): ModuleWithProviders<ListDataModule> {
    return {
      ngModule: ListDataModule,
      providers: [
        {
          provide: LIST_DATA_API,
          useClass: dataApi,
        },
      ],
    };
  }
}
