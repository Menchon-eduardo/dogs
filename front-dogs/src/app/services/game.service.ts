import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { Global } from './global';


@Injectable()
export class GameService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    testService(){
        return 'Probando el servicio de Angular';
    }
    saveGame(game:Game): Observable<any>{
        let params = JSON.stringify(game);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-game', params,{headers:headers});

    }
    getGames(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'games', {headers: headers});
    }
    getGame(gameName): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'game'+gameName, {headers: headers});
    }
}
