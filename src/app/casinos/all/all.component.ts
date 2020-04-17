import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';
import { CasinosService } from '../casinos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllCasinosComponent implements OnInit {
  data: any;
  casinos: any; 

  constructor(
    private seoService: SeoService,
    public casinosService: CasinosService,
    private route: ActivatedRoute
  ) {
    this.seoService.seo('Online Casinos', 'We are continuously providing reviews and ratings for the most trusted casinos online. Find the best casino for you by searching our free casino directory.');
  }

  ngOnInit() {
    this.data = this.route.snapshot.data['resolved'];
    this.casinos = this.data.casinos;
  }
}
