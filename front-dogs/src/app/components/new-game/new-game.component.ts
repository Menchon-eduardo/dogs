import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [GameService, UploadService]
})
export class NewGameComponent implements OnInit {

  public game: Game;
  public status: string;
  public gameCharacter: string;
  public gameCreated: Boolean;

  constructor(
    private _gameService: GameService,
    private _route: ActivatedRoute,
		private _router: Router
  ) {
    this.game = new Game ('','','','',4);

   }

  ngOnInit(): void {
    this.gameCreated = false;
  }

  onSubmit(form){
    console.log(this.game);
    //Save data
    this._gameService.saveGame(this.game).subscribe(
      response => {
        if(response){
          this.status = "success"; 
          this.gameCreated= true;
          console.log(this.gameCreated);
         
          
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
