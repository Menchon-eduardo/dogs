import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { Trait } from '../models/trait';
import { Global } from './global';


@Injectable()
export class CharacterService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    
    saveCharacter(character:Character): Observable<any>{
        let params = JSON.stringify(character);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-character', params,{headers:headers});

    }
    getCharacters(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'characters', {headers: headers});
    }
    getCharacter(characterName): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'character'+characterName, {headers: headers});
    }
    saveTrait(trait:Trait): Observable<any>{
        let params = JSON.stringify(trait);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'character'+'save-trait', params,{headers:headers});
    }
   
}
