import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of, forkJoin } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { CasinosService } from '../casinos.service';

@Injectable()
export class OneCasinoResolve implements Resolve<any>{

    constructor(
        private router: Router,
        private casinosService: CasinosService,
      ){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let lastRoute = this.router.url;
        let url = route.params.url;
        return forkJoin([
            this.casinosService.getOneCasino(url)
        ]).pipe(
                map((result:any) => {
                    return {
                        casino: result[0],
                    };
                }),
                catchError((error) => {
                    if (error.statusCode == 404) {
                        this.router.navigate(['/404']);
                    } else {
                        this.router.navigate([lastRoute]);
                    }
                    return Observable.throw(error);
                })
            );


    }

}