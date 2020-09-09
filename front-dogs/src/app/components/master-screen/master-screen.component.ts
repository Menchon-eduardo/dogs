import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Dice } from '../../models/dice';

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
  public dice: Dice
  public dice1: Dice
  public statAdded: Array <any>

  constructor(
    private _characterService : CharacterService,
  ) {
    this.dice= new Dice ("",0,"");
    this.dice1= new Dice ("",0,"");
    this.statAdded = []
   }

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
  addDiceStat(name, number){
    if(this.statAdded.length == 1){
      var diceSelect1 = this.dice1;
      diceSelect1.name= name;
      diceSelect1.number= number;
      diceSelect1.dice= "d6";
      this.statAdded.push(diceSelect1);
      console.log(this.statAdded);
     }if(this.statAdded.length == 0){
      var diceSelect = this.dice;
      diceSelect.name= name;
      diceSelect.number= number;
      diceSelect.dice= "d6";
      this.statAdded.push(diceSelect);
      console.log(this.statAdded);
   }else{
     console.log("jajano");

   }
   

  }
  addDice(x,t,z){}
}
