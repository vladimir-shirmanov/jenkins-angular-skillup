import { Component } from '@angular/core';
import { version } from '../../package.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jen-tut ci cd is working huray';
  version = version;
}
