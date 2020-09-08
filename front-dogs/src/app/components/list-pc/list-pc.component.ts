import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
@Component({
  selector: 'app-list-pc',
  templateUrl: './list-pc.component.html',
  styleUrls: ['./list-pc.component.css'],
  providers: [GameService, CharacterService]
})
export class ListPCComponent implements OnInit {
  public games: Game[]
  public characters: Character[]
  public characterName: String
  public newCharacter: String
  

  constructor(
    private _characterService: CharacterService,
    private _gameService: GameService
  ) { }

  ngOnInit() {
    this.getCharacters();
    
      }
  getCharacters(){
    this._characterService.getCharacters().subscribe(
      response =>{
        console.log(response);
        if(response.character){
          this.characters = response.character;
          console.log(this.characters);
        }
      },
      error => {
        console.log(<any>error);
      }
    
    )
  }
  getGames(){
    this._gameService.getGames().subscribe(
      response => {
        if(response.games){
          this.games = response.games;
          console.log(this.games);          
        
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
