import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) {
    this.seoService.seo('About Casino Best Offer', 'Find best online casino deals, bonus offers, reviews, new and popular games, contact details and much much more.');
  }

  ngOnInit() {
  }

}
