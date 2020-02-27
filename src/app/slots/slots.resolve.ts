import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of, forkJoin } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { SlotsService } from './slots.service';

@Injectable()
export class SlotsResolve implements Resolve<any>{

    constructor(
        private router: Router,
        private slotsService: SlotsService
      ){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let lastRoute = this.router.url;
        return forkJoin([
            this.slotsService.getAllSlots(),
        ]).pipe(
                map((result:any) => {
                    return {
                        slots: result[0],
                    };
                }),
                catchError((error) => {
                    this.router.navigate([lastRoute]);
                    return Observable.throw(error);
                })
            );


    }

}