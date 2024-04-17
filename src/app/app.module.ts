//App module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TipCalculationService } from './tip-calculation.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InputPageComponent,
    OutputPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [TipCalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
