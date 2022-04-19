import { APP_INITIALIZER, Provider } from "@angular/core";
import { AuthService } from "./auth.service";

function authUserStorageFactory(authService: AuthService) {
  return () => authService.setUserFromStorage();
}

export const AUTH_USER_STORAGE: Provider = {
  provide: APP_INITIALIZER,
  useFactory: authUserStorageFactory,
  deps: [AuthService],
  multi: true,
};
