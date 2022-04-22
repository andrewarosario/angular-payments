import { TestBed } from "@angular/core/testing";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MessageService } from "./message.service";

describe(MessageService.name, () => {
  let service: MessageService;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    matSnackBarSpy = jasmine.createSpyObj<MatSnackBar>("MatSnackBar", ["open"]);

    TestBed.configureTestingModule({
      providers: [
        MessageService,
        { provide: MatSnackBar, useValue: matSnackBarSpy },
      ],
    });
    service = TestBed.inject(MessageService);
  });

  it("should call #MatSnackBar.open on open", () => {
    service.open("any message");
    expect(matSnackBarSpy.open).toHaveBeenCalledOnceWith(
      "any message",
      "Fechar",
      {
        verticalPosition: "top",
        duration: 2000,
      }
    );
  });
});
