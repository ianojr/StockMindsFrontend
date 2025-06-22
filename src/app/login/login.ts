import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login { 
  credentials = { username: '', password: '' }; 
  message = ''; 
 
  // constructor(private authService: Auth) {} 
  constructor(private authService: Auth, private router: Router) {}

 
  login() {
  this.authService.login(this.credentials).subscribe({
    next: (res: any) => {
      this.authService.saveToken(res.access);
      this.message = 'Login successful!';
      this.router.navigate(['/dashboard']); // <-- redirect to dashboard
    },
    error: () => this.message = 'Login failed!'
  });
}

   
} 