import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Game } from '../../models/game';
import { BackgroundKind } from '../../models/backgroundKind';
import { Trait } from '../../models/trait';

import { GameService } from '../../services/game.service';
import { CharacterService } from '../../services/character.service';
import { BackgroundKindService } from '../../services/backgroundKind.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-create-pc',
  templateUrl: './create-pc.component.html',
  styleUrls: ['./create-pc.component.css'],
  providers: [GameService, CharacterService, BackgroundKindService,]
})
export class CreatePCComponent implements OnInit {
  public character: Character
  public backgroundKindo: String
  public status: string
  public name: String
  public statusName: Boolean
 
  //backgrounds
  public backgroundKind: BackgroundKind
  public backgroundKindName: String
  //traits
  public traits: Array<Number>
  public trait1: Trait
  public trait2: Trait
  public trait3: Trait
  public trait4: Trait
  public trait5: Trait
  public traitCharacter: Array<any>
  public traitd4: any
  public traitd6: any
  public traitd8: any
  public traitd10: any

  //relationsiphs
  public relationships: Array<Number>
  


  constructor(
    private _gameService: GameService,
    private _characterService: CharacterService,
    private _backgroundKindService: BackgroundKindService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.character = new Character ('','','','','',[],0,0,0,0,[],[],[],'',true);
    this.trait1 = new Trait ("","",0,"");
    this.trait2 = new Trait ("","",0,"");
    this.trait3 = new Trait ("","",0,"");
    this.trait4 = new Trait ("","",0,"");
    this.trait5 = new Trait ("","",0,"");
   }

  ngOnInit()  {
    this._route.params.subscribe((params: Params) =>{
      this.name = params.name;
      if(this.name != ""){this.statusName=true}else{this.statusName=true};
      this.traitd4 = 0;
      this.traitd6 = 0;
      this.traitd8 = 0;
      this.traitd10 = 0;
      

    });
    
    
  }
  getBackgroundKinds(){
    this._backgroundKindService.getBackgroundKinds().subscribe(
      response => {
        if(response.backgroundKind){
          this.backgroundKind=response.backgroundKind;
          console.log(this.backgroundKind);
 
        }
      },
      error => {
        console.log(<any>error);
      }
    
    )
    
  }
  getBackgroundKind(name){
    this._backgroundKindService.getBackgroundKind(name).subscribe(
      response => {
        console.log(response);
        this.backgroundKind = response.backgroundKind;
        var backgroundKindShowNow = this.backgroundKind;
        this.traits=backgroundKindShowNow.traits;
        this.relationships=backgroundKindShowNow.relationships;
        console.log("relatioships", this.relationships);
        console.log("traits", this.traits);
      
      },
      error => {
        console.log(<any>error);
      }
    
    )
    
  }
  createTrait(){
    console.log(this.trait1, this.trait2, this.trait3, this.trait4, this.trait5);
    if(this.trait1){
      this.character.traits.push(this.trait1);
    }if(this.trait2){
      this.character.traits.push(this.trait2);
    }if(this.trait3){
      this.character.traits.push(this.trait3);
    }if(this.trait4){
      this.character.traits.push(this.trait4);
    }if(this.trait5){
      this.character.traits.push(this.trait5);
    }else{
      console.log("There is no traits")
    };
  
    
    console.log(this.character.traits);
    this.traitCharacter = this.character.traits;



  }
  onSubmit(form){
    console.log(this.character);
    //Save data
    this._characterService.saveCharacter(this.character).subscribe(
      response => {
        if(response){
          this.status = "success";
          this._router.navigate(['/create-pc']);

        }else{
          this.status = "failed";
          form.reset();
        }
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }

    )
  }
  

  
}
