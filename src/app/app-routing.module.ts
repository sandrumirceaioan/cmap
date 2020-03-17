import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeResolve } from './home/home.resolve';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      resolved: HomeResolve
    }
  },
  {
    path: 'casinos',
    loadChildren: () => import('./casinos/casinos.module').then(m => m.CasinosModule)
  },
  { path: 'about', component: AboutComponent },
  { path: 'terms-and-conditions', component: TermsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
