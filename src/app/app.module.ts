import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import {MatSelectModule} from '@angular/material/select';
import { TransactionBtnComponent } from './components/transaction/transaction-btn/transaction-btn.component';
import { MaskModule } from 'soft-angular-mask';
import { UserCardComponent } from './components/user/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagamentoComponent,
    UserCreateComponent,
    UserReadComponent,
    ModalComponent,
    TransactionBtnComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    NgbModule,
    MatSelectModule,
    MaskModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
