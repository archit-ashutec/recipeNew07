import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from '../auth/auth.service';
import { dataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAuthenticated: boolean = false;
  userSub: Subscription;
  constructor(
    private dataStorageService: dataStorageService,
    private authService: authService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFatchData() {
    this.dataStorageService.fatchRecipes().subscribe();
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}
