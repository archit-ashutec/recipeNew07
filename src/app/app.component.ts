import { Component } from '@angular/core';
import { authService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authServie: authService) {}
  ngOnInit() {
    this.authServie.autoLogin();
  }
}
