import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';

import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-master-screen',
  templateUrl: './master-screen.component.html',
  styleUrls: ['./master-screen.component.css'],
  providers: [CharacterService]
})
export class MasterScreenComponent implements OnInit {
  public characterSelected: Character
  public characters: Character 
  public traits: Array <any>
  public relationships: Array <any>

  constructor(
    private _characterService : CharacterService,
  ) { }

  ngOnInit() {
    this.getCharacters();
    
  }
  getCharacter(name){
    this._characterService.getCharacter(name).subscribe(
      response => {
        console.log(response);
        this.characterSelected = response.character;
        this.traits= response.character.traits;
        this.relationships= response.character.relationships;
        
      
      },
      error => {
        console.log(<any>error);
      }
    
    )
    
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
}
