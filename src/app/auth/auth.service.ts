import { MatTabHeader } from '@angular/material/tabs';

import { AuthData } from './auth-data.modul';
import { User } from './user.modul';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {
    authChange = new Subject<boolean>()
    user: User;
    
    constructor(private router: Router) {}


        registerUser(authData: AuthData) {
            this.user = {
                email: authData.email,
                userId: Math.round(Math.random() *  10000).toString()
                }
            this. authSuccessfull();
          
        }

        login(authData: AuthData) {
            this.user = {
            email: authData.email,
            userId: Math.round(Math.random() *  10000).toString()
            }
            this. authSuccessfull();
        }

        logout() {
            this.user = null;
            this.authChange.next(false);
            this.router.navigate(['/login'])
        }

        getUser() {
            return {...this.user}
        }

        isAuth() {
            return this.user != null;
        }

        authSuccessfull() {
            this.authChange.next(true) ;
            this.router.navigate(['/training'])
        }


}