import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarcosWalletService } from './marcos-wallet.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MarcosCurrencyComponent } from './marcos-currency/marcos-currency.component';
import { MarcosWalletComponent } from './marcos-wallet/marcos-wallet.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'marcos-currency', component: MarcosCurrencyComponent },
      { path: 'marcos-wallet', component: MarcosWalletComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NavbarComponent,
    MarcosCurrencyComponent,
    MarcosWalletComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MarcosWalletService],
})
export class AppModule {}
