import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of, forkJoin } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { CasinosService } from '../casinos.service';

@Injectable()
export class AllCasinoResolve implements Resolve<any>{

    constructor(
        private router: Router,
        private casinosService: CasinosService
      ){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let lastRoute = this.router.url;
        return forkJoin([
            this.casinosService.getAllCasinos(),
        ]).pipe(
                map((result:any) => {
                    return {
                        casinos: result[0],
                    };
                }),
                catchError((error) => {
                    this.router.navigate([lastRoute]);
                    return Observable.throw(error);
                })
            );


    }

}