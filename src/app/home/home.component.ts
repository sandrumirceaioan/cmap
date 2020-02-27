import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/services/seo.service';
import { ActivatedRoute } from '@angular/router';
import { CasinosService } from '../casinos/casinos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  casinos: any; 

  constructor(
    private seoService: SeoService,
    public casinosService: CasinosService,
    private route: ActivatedRoute
  ) {
    this.seoService.seo('Get Best Online Casino Offers', 'Get best casino reviews, offers, deals and bonuses.');
  }

  ngOnInit() {
    this.data = this.route.snapshot.data['resolved'];
    this.casinos = this.data.casinos;
  }

}
