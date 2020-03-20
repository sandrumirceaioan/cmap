import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasinosService } from '../casinos.service';
import { BonusesService } from '../../bonuses/bonuses.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-casino',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneCasinoComponent implements OnInit {
  @ViewChild('stickyMenu', { static: true }) menuElement: ElementRef;
  data: any;
  casino: any;
  expanded: boolean = false;
  ratingClass: string;
  bestBonus: any;
  sticky: boolean = false;
  menuPosition: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public casinosService: CasinosService,
    public bonusesService: BonusesService,
    public seoService: SeoService
  ) {
    this.data = this.route.snapshot.data['resolved'];
    this.seoService.seo(this.data.casino.casinoName + ' - Bonuses, Games, Reviews', this.data.casino.casinoMetaDescription);
   }

  ngOnInit() {
    this.casino = this.data.casino;
    this.bonusesService.getCasinoBestBonus(this.casino._id).subscribe(
      (result) => {
        this.bestBonus = result;
      }, (error) => {
        console.log(error.message);
      }
    );
    switch (true) {
      case (this.casino.casinoScore >= 9):
        this.ratingClass = 'rating-green';
        break;
      case (this.casino.casinoScore >= 8):
        this.ratingClass = 'rating-yellow';
        break;
      case (this.casino.casinoScore >= 7):
        this.ratingClass = 'rating-orange';
        break;
      case (this.casino.casinoScore < 7):
        this.ratingClass = 'rating-red';
        break;
    }
  }

  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop
  }

  @HostListener('window:scroll', [])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  goToTerms(url) {
    window.open(url, '_blank');
  }

}
