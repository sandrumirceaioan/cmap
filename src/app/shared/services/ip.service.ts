import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class IpService {
    backendPath = environment.backend;
    apiPath = environment.apiEndpoint;

    constructor(
        private http: HttpClient
    ) { }

    getCountryByIp(ip): Observable<any> {
        let params = new HttpParams();
        params = params.append('ip', ip.toString());
        return this.http.get(
          this.apiPath + '/users', { params: params }).pipe(
            map((result: any) => {
              return result;
            }),
            catchError((error) => {
              return throwError(error.error);
            })
          );
    }




}
