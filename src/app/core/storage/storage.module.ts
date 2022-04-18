import { NgModule } from "@angular/core";
import { LocalStorageService } from "./services/local-storage.service";
import { Storage } from "./storage";

@NgModule({
  providers: [
    LocalStorageService,
    {
      provide: Storage,
      useClass: LocalStorageService,
    },
  ],
})
export class StorageModule {}
