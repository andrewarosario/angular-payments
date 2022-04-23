import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { NavbarComponentModule } from "src/app/components/navbar/navbar.component.module";
import { PaymentApiService } from "src/app/services/payment-api/payment-api.service";
import { ListDataModule } from "src/app/shared/list-data/list-data.module";
import { MessageModule } from "src/app/shared/message/message.module";
import { PaymentDeleteModalModule } from "./payment-delete-modal/payment-delete-modal.module";
import { PaymentFormModalModule } from "./payment-form-modal/payment-form-modal.module";
import { PaymentsFilterModule } from "./payments-filter/payments-filter.module";
import { PaymentsPageRoutingModule } from "./payments-page-routing.module";
import { PaymentsPageComponent } from "./payments-page.component";
import { PaymentsTableModule } from "./payments-table/payments-table.module";

@NgModule({
  imports: [
    CommonModule,
    PaymentsPageRoutingModule,
    MatButtonModule,
    MatDialogModule,
    PaymentFormModalModule,
    PaymentDeleteModalModule,
    PaymentsTableModule,
    PaymentsFilterModule,
    MessageModule,
    ListDataModule.forRoot(PaymentApiService),
  ],
  declarations: [PaymentsPageComponent],
})
export class PaymentsPageModule {}
