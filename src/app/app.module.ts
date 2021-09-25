import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    LogInComponent,
    CurrentTrainingComponent,
    NewTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    FlexLayoutModule

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
