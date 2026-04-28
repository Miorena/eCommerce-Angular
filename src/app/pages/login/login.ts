import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  error = false;
  showPassword = false;
  rememberMe = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('velene_remember');
    if (saved) {
      const data = JSON.parse(saved);
      this.username = data.username;
      this.password = data.password;
      this.rememberMe = true;
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  submit(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.error = false;
      if (this.rememberMe) {
        localStorage.setItem(
          'velene_remember',
          JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        );
      } else {
        localStorage.removeItem('velene_remember');
      }
      this.router.navigate(['/']);
    } else {
      this.error = true;
    }
  }
}
