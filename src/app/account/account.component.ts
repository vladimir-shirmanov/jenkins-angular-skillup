import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user$: Observable<any>;

  constructor(private auth: AuthService) { 
    this.user$ = auth.user$;
  }

  ngOnInit(): void {
  }

}
