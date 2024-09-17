import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class userService {
    API_URL = "http://localhost:8080";
    constructor(private http: HttpClient) { }
    getDefaultData() {
        return this.http.get(`${this.API_URL}/common/masterForm`);
    }
    // getCountries() {
    //     return this.http.get<any>('assets/demo/data/countries.json')
    //         .toPromise()
    //         .then(res => res.data as any[])
    //         .then(data => data);
    // }
}