import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalService } from './shared/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  toggle: boolean = false;

  constructor(
    public globalService: GlobalService
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.globalService.mobileMenuToggle = false;
  }

}
