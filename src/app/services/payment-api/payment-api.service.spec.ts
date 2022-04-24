import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { mockPayments } from "src/app/mocks/payments.mock";
import { environment } from "src/environments/environment";

import { PaymentApiService } from "./payment-api.service";

describe(PaymentApiService.name, () => {
  let service: PaymentApiService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaymentApiService],
    });
    service = TestBed.inject(PaymentApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it(`#${PaymentApiService.prototype.list.name} should return payments`, (done) => {
    service.list({ _limit: 5, _page: 1 }).subscribe((payments) => {
      expect(payments).toEqual(mockPayments);
      done();
    });

    httpController
      .expectOne(`${environment.urlApi}/tasks?_limit=5&_page=1`)
      .flush(mockPayments);
  });

  it(`#${PaymentApiService.prototype.getCount.name} should return payments count`, (done) => {
    service.getCount({ title_like: "any-payment" }).subscribe((payments) => {
      expect(payments).toEqual(mockPayments.length);
      done();
    });

    httpController
      .expectOne(`${environment.urlApi}/tasks?title_like=any-payment`)
      .flush(mockPayments);
  });

  it(`#${PaymentApiService.prototype.create.name} should return created payment`, (done) => {
    const [mockPayment] = mockPayments;
    service.create(mockPayment).subscribe((payment) => {
      expect(payment).toEqual(mockPayment);
      done();
    });

    httpController.expectOne(`${environment.urlApi}/tasks`).flush(mockPayment);
  });

  it(`#${PaymentApiService.prototype.update.name} should return updated payment`, (done) => {
    const [mockPayment] = mockPayments;
    service.update(mockPayment.id, mockPayment).subscribe((payment) => {
      expect(payment).toEqual(mockPayment);
      done();
    });

    httpController
      .expectOne(`${environment.urlApi}/tasks/${mockPayment.id}`)
      .flush(mockPayment);
  });

  it(`#${PaymentApiService.prototype.delete.name} should delete payment`, (done) => {
    const [mockPayment] = mockPayments;
    service.delete(mockPayment.id).subscribe((res) => {
      expect(res).toEqual({});
      done();
    });

    httpController
      .expectOne(`${environment.urlApi}/tasks/${mockPayment.id}`)
      .flush({});
  });
});
