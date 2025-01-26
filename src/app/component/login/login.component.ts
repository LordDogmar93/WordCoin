import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(data => {
      if (data.username === this.username && data.password === this.password) {
        this.router.navigate(['/menu']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
