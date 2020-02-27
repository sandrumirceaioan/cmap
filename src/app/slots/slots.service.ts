import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class SlotsService {
    backendPath = environment.backend;
    apiPath = environment.apiEndpoint;

    constructor(
        private http: HttpClient
    ) { }

    getAllSlots(): Observable<any> {
        return this.http.get(
            this.apiPath + '/slots/all').pipe(
                map((result: any) => {
                    return result;
                }),
                catchError((error) => {
                    return throwError(error.message);
                })
            );
    }

}
