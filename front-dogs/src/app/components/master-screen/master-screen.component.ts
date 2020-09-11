import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Dice } from '../../models/dice';
import { Trait } from '../../models/trait';

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
  public traits: Array <Trait>
  public relationships: Array <any>
  public dice: Dice
  public dice1: Dice
  public dice2: Dice
  public dice3: Dice
  public dice4: Dice
  public dice5: Dice
  public dice6: Dice
  public dice7: Dice
  public statAdded: Array <any>
  public traitsAdded: Array <any>
  public relationshipsAdded: Array <any>
  public diceAdded: Array <any>

  constructor(
    private _characterService : CharacterService,
  ) {
    this.dice= new Dice ("",0,"");
    this.dice1= new Dice ("",0,"");
    this.dice2= new Dice ("",0,"");
    this.dice3= new Dice ("",0,"");
    this.dice4= new Dice ("",0,"");
    this.dice5= new Dice ("",0,"");
    this.dice6= new Dice ("",0,"");
    this.dice7= new Dice ("",0,"");
    this.statAdded = []
    this.traitsAdded = [];
    this.relationshipsAdded = [];
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
  addDiceTrait(name, number, dice){
    
    switch(this.traitsAdded.length){
      case 0: var diceSelect2 = this.dice2;
      diceSelect2.name= name;
      diceSelect2.number= number;
      diceSelect2.dice= dice;
      
      this.traitsAdded.push(diceSelect2);
      console.log(this.traitsAdded);
      break;
      case 1: var diceSelect3 = this.dice3;
      diceSelect3.name= name;
      diceSelect3.number= number;
      diceSelect3.dice= dice;
      
      this.traitsAdded.push(diceSelect3);
      console.log(this.traitsAdded);
      break;
      case 2: var diceSelect4 = this.dice4;
      diceSelect4.name= name;
      diceSelect4.number= number;
      diceSelect4.dice= dice;
      
      this.traitsAdded.push(diceSelect4);
      console.log(this.traitsAdded);
      break;
      default: console.log("jajajajano");
    }
  }
  addDiceRelationship(name, number, dice){
    
    switch(this.relationshipsAdded.length){
      case 0: var diceSelect5 = this.dice5;
      diceSelect5.name= name;
      diceSelect5.number= number;
      diceSelect5.dice= dice;
      
      this.relationshipsAdded.push(diceSelect5);
      console.log(this.relationshipsAdded);
      break;
      case 1: var diceSelect6 = this.dice6;
      diceSelect6.name= name;
      diceSelect6.number= number;
      diceSelect6.dice= dice;
      
      this.relationshipsAdded.push(diceSelect6);
      console.log(this.relationshipsAdded);
      break;
      case 2: var diceSelect7 = this.dice7;
      diceSelect7.name= name;
      diceSelect7.number= number;
      diceSelect7.dice= dice;
      
      this.relationshipsAdded.push(diceSelect7);
      console.log(this.relationshipsAdded);
      break;
      default: console.log("jajajajano");
    }
  }
  onSubmit(){
    this.diceAdded = this.statAdded.concat(this.traitsAdded.concat(this.relationshipsAdded));
    this.diceAdded.sort();
  
    
    
    console.log("lista final: "+this.diceAdded);
  }
  
}
