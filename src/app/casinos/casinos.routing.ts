import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinosComponent } from './casinos.component';
import { AllCasinosComponent } from './all/all.component';
import { NewCasinosComponent } from './new/new.component';
import { BestCasinosComponent } from './best/best.component';
import { OneCasinoComponent } from './one/one.component';
import { OneCasinoResolve } from './one/one.resolve';
import { AllCasinoResolve } from './all/all.resolve';

const routes: Routes = [
            { path: '', redirectTo: 'all' },
            {
                path: 'all',
                component: AllCasinosComponent,
                resolve: {
                    resolved: AllCasinoResolve
                }
            },
            {
                path: 'new',
                component: NewCasinosComponent,
            },
            {
                path: 'best',
                component: BestCasinosComponent,
            },
            {
                path: ':url',
                component: OneCasinoComponent,
                resolve: {
                    resolved: OneCasinoResolve
                }
            }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CasinosRoutingModule { }