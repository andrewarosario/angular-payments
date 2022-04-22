import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Payment } from "src/app/models/payment";

@Component({
  selector: "app-payment-form-modal",
  templateUrl: "./payment-form-modal.component.html",
  styleUrls: ["./payment-form-modal.component.scss"],
})
export class PaymentFormModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PaymentFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public payment: Payment,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.updateForm();
  }

  submit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      value: ["", [Validators.required]],
      date: [null, [Validators.required]],
      title: ["", [Validators.required]],
    });
  }

  private updateForm(): void {
    if (this.payment) {
      this.form.patchValue(this.payment);
    }
  }
}
