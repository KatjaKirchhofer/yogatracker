import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LogInComponent } from './auth/log-in/log-in.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'login', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
