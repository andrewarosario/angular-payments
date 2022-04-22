import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class MatPaginatorIntlPtBr extends MatPaginatorIntl {
  itemsPerPageLabel: string = "Exibir";
  nextPageLabel: string = "Próximo";
  previousPageLabel: string = "Anterior";
}
