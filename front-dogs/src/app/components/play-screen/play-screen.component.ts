import { Component, OnInit, Input, assertPlatform } from '@angular/core';

@Component({
  selector: 'app-play-screen',
  templateUrl: './play-screen.component.html',
  styleUrls: ['./play-screen.component.css']
})
export class PlayScreenComponent implements OnInit {
  @Input() statAdded: any;
  @Input() relationshipsAdded: any;
  @Input() traitsAdded: any;
  @Input() diceAdded: any;
  public result: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }
  diceOff(name){
    this.diceAdded.find(name => this.diceAdded.name == name)
  }
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;

  }
  getRndDice(number,dice){
  for(var time=0; time<number; time++){
      switch(dice){
        case "d4":          
          var resultDice = this.getRndInteger(1, 4)
          //this.result.push(resultDice);
        break;
        case "d6":
          var resultDice = this.getRndInteger(1, 6)
          //this.result.push(resultDice);
        break;
        case "d8":
          var resultDice = this.getRndInteger(1, 8)
          //this.result.push(resultDice);
        break;
        case "d10":
          var resultDice = this.getRndInteger(1, 10)
          //this.result.push(resultDice);
        break;
        default:
          break;

     }
    
    console.log("added 1"+dice+"--> "+resultDice);
    this.result.push(resultDice);
    
    
  }
  }
  rollDice(){
    console.log("rollDice working");
    this.diceAdded.forEach(i => {
      
            if(i != 0){
        var diceNumber= i.number;
        
        var diceDice= i.dice;
        
        this.getRndDice(diceNumber,diceDice);
        
        
      }
 
    });
      

    
  console.log(" resultado "+this.result);
  }
}
