import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  authSubcription: Subscription;
  @Output() closeSidenav = new EventEmitter<void>()
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubcription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }
  onClose() {
    this.closeSidenav.emit()
  }

  onLogout() {
    this.onClose();
    this.authService.logout()
  }

  ngOnDestroy() {
    this.authSubcription.unsubscribe();
  }

}
