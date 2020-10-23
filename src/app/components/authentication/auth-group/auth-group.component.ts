import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-group',
  templateUrl: './auth-group.component.html',
  styleUrls: ['./auth-group.component.scss']
})
export class AuthGroupComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  profile: any = null;

  constructor(private auth: AuthService) { 
    this.isAuthenticated$ = auth.isAuthenticated$;
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => this.profile = profile
    );
  }

}
