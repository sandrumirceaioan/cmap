import { Component, OnInit, Output } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  shrink: boolean;
  toggleMenu: boolean = false;
  selected: any;
  hasSubItems: boolean = false;

  constructor(
    public globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public menuItems: any[] = [
    { "title": "Home", "link": "/" },
    {
      "title": "Casinos", "link": "#",
      "subItems": [
        { "title": "All Casinos", "link": "#" },
        { "title": "New Casinos", "link": "#" },
        { "title": "Best Casinos", "link": "#" }
      ]
    },
    {
      "title": "Bonuses", "link": "#",
      "subItems": [
        { "title": "Casino Bonuses", "link": "#" },
        { "title": "Welcome Bonuses", "link": "#" },
        { "title": "Deposit Bonuses", "link": "#" },
        { "title": "Exclusive Bonuses", "link": "#" },
      ]
    },
    { "title": "Slots", "link": "#" },
    { "title": "Affiliates", "link": "#" },
    { "title": "News", "link": "#" },
    { "title": "About", "link": "/about" }
  ];

  openMenu() {
    this.globalService.mobileMenuToggle = !this.globalService.mobileMenuToggle;
  }

  select(item) {
    this.selected = (this.selected === item ? null : item);
    if (item && this.selected.link != "#") {
      this.router.navigate([this.selected.link]);
    }
  }

  isActive(item) {
    if (this.selected === item && item.subItems && item.subItems.length) {
      this.hasSubItems = true;
      return true;
    } else {
      return false;
    }
  }

}
