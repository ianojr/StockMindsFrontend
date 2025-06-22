import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register { 
  user = { username: '', password: '' }; 
  message = ''; 
 
  // constructor(private authService: Auth) {}
  constructor(private authService: Auth, private router: Router) {}

 
  register() {
  this.authService.register(this.user).subscribe({
    next: () => {
      this.message = 'Registration successful!';
      this.router.navigate(['/dashboard']);
    },
    error: err => {
      console.error('Registration error:', err); // <-- See the real cause
      this.message = 'Registration failed.';
    }
  });
}

}