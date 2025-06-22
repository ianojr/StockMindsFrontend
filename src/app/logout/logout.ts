import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout implements OnInit {
  constructor(private auth: Auth, private router: Router) { }

  ngOnInit(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  // logout() {
  //   this.auth.logout();
  //   this.router.navigate(['/login']);
  // }

}