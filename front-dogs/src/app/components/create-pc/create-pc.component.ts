import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { Game } from '../../models/game';
import { BackgroundKind } from '../../models/backgroundKind';

import { GameService } from '../../services/game.service';
import { CharacterService } from '../../services/character.service';
import { BackgroundKindService } from '../../services/backgroundKind.service';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-create-pc',
  templateUrl: './create-pc.component.html',
  styleUrls: ['./create-pc.component.css'],
  providers: [GameService, CharacterService, BackgroundKindService]
})
export class CreatePCComponent implements OnInit {
  public character: Character
  public backgroundKind: BackgroundKind
  public status: string
  public name: String
  public statusName: Boolean
  public statsDice: Number
  public treats: Array<JSON>


  constructor(
    private _gameService: GameService,
    private _characterService: CharacterService,
    private _backgroundKindService: BackgroundKindService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.character = new Character ('','','','','',[],0,0,0,0,[],[],[],'',true);
   }

  ngOnInit()  {
    this._route.params.subscribe((params: Params) =>{
      this.name = params.name;
      if(this.name != ""){this.statusName=true}else{this.statusName=true};
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
  getBackgroundKind(backgroundKindId){
    this._backgroundKindService.getBackgroundKind(backgroundKindId).subscribe(
      response => {
        if(response.backgroundKind){
          this.backgroundKind=response.name;
          console.log(this.backgroundKind);
          this.statsDice=response.stats;
          this.treats=response.treats;
        }
      },
      error => {
        console.log(<any>error);
      }
    
    )
    
  }
  onSubmit(form){
    console.log(this.character);
    //Save data
    this._characterService.saveCharacter(this.character).subscribe(
      response => {
        if(response){
          this.status = "success";

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