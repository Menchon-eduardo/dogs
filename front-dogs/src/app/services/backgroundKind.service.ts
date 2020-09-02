import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackgroundKind } from '../models/backgroundkind';
import { Global } from './global';


@Injectable()
export class BackgroundKindService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    
    getBackgroundKinds(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'backgrounds', {headers: headers});
    }
    getBackgroundKind(backgroundName): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'character'+backgroundName, {headers: headers});
    }
}
