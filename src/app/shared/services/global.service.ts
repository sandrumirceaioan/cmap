import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public mobileMenuToggle: boolean = false;

    constructor( ) { }


}
