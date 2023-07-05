import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout(): void {
    // Perform logout operations here, e.g., clear user session data

    // Navigate the user to the login page
    this.router.navigate(['/login']);
  }
}
