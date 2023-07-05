import { Component, OnInit } from '@angular/core';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private logoutService: LogoutService) { }
  logout(): void {
    this.logoutService.logout();
  }
  ngOnInit() {
  }

}
