import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class MessageService {
  constructor(private matSnackBar: MatSnackBar) {}

  open(message: string) {
    return this.matSnackBar.open(message, "Fechar", {
      verticalPosition: "top",
      duration: 2000,
    });
  }
}
