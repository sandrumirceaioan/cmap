import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { 
    this.seoService.seo('Terms and Conditions', 'Terms and conditions, terms of use.');
  }

  ngOnInit(): void {
  }

}
