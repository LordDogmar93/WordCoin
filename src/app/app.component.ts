import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationStart } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';
import {LoginComponent} from './component/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WordCoin';
  isLoginPageValue: boolean = false;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        const navEvent = event as NavigationStart;
        this.isLoginPageValue = navEvent.url === '/login';
      });
  }
  isLoginPage(): boolean {
    console.log('Router URL:', this.router.url);
    return this.isLoginPageValue;
  }
}
