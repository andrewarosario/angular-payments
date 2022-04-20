import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { PaymentApiService } from "./payment-api.service";

describe("PaymentApiService", () => {
  let service: PaymentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PaymentApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
