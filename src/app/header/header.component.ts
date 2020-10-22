import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>

  constructor(private auth: AuthService) { 
    this.isAuthenticated$ = auth.isAuthenticated$;
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: document.location.origin });
  }

}
