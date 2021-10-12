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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TrainingComponent } from './training/training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { StopTrainingComponent } from './training/current-training/stop-training/stop-training.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    LogInComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    SidenavListComponent,
    HeaderComponent,
    TrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
