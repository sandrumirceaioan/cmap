import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinosRoutingModule } from './casinos.routing';
import { AllCasinosComponent } from './all/all.component';
import { NewCasinosComponent } from './new/new.component';
import { BestCasinosComponent } from './best/best.component';
import { OneCasinoComponent } from './one/one.component';
import { OneCasinoResolve } from './one/one.resolve';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StarRatingModule } from '@sreyaj/ng-star-rating';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CasinosComponent } from './casinos.component';
import { AllCasinoResolve } from './all/all.resolve';

@NgModule({
  declarations: [
    CasinosComponent,
    AllCasinosComponent,
    NewCasinosComponent,
    BestCasinosComponent,
    OneCasinoComponent
  ],
  imports: [
    CommonModule,
    CasinosRoutingModule,
    MDBBootstrapModule.forRoot(),
    StarRatingModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    OneCasinoResolve,
    AllCasinoResolve
  ]
})
export class CasinosModule { }
