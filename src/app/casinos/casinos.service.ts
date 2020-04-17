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
export class CasinosService {
    backendPath = environment.backend;
    apiPath = environment.apiEndpoint;

    constructor(
        private http: HttpClient
    ) { }

    getBestCasinos(): Observable<any> {
        return this.http.get(
            this.apiPath + '/casinos/best').pipe(
                map((result: any) => {
                    return result;
                }),
                catchError((error) => {
                    return throwError(error.message);
                })
            );
    }

    getAllCasinos(): Observable<any> {
        return this.http.get(
            this.apiPath + '/casinos/all').pipe(
                map((result: any) => {
                    return result;
                }),
                catchError((error) => {
                    return throwError(error.message);
                })
            );
    }

    getOneCasino(url): Observable<any> {
        let params = new HttpParams();
        params = params.append('url', url.toString());
        return this.http.get(
          this.apiPath + '/casinos', { params: params }).pipe(
            map((result: any) => {
              return result;
            }),
            catchError((error) => {
              return throwError(error.error);
            })
          );
    }

    getCasinoTerms(url): Observable<any> {
        return this.http.get(
            this.apiPath + '/casinos/terms/' + url, httpOptions).pipe(
                map((result: any) => {
                    return result;
                }),
                catchError((error) => {
                    return throwError(error.message);
                })
            );
    }

}
