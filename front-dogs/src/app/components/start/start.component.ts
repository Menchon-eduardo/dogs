import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [GameService]
})
export class StartComponent implements OnInit {
public games: Game
public gameName: String
public game: any
public status: String


  constructor(
    private _gameService: GameService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.game= 1
   }

  ngOnInit() {
    this.getGames();
    console.log("initializing get Games")
    console.log(this.games)
    /*this._route.params.subscribe(params =>{
      let name = params.name;
      this.checkGames(name);
    });*/
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
  checkGames(name){
    this.game = false
    this._gameService.getGame(name).subscribe(
      response => {
        
        console.log("Game exists", response);
        this.status= "ok";
      },
      error => {
        console.log("The game doesn't exist", error);
        this.status = "failed";
        
      }
    )


  }

}
