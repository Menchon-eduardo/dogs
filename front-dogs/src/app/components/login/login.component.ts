import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public user: User
   public name: String
  public passwordKey: String
  public status: String

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit(name,passwordKey){
    
    this._userService.getUser(name).subscribe(
      response => {

            
        //console.log("User exists", response.user);
        //console.log(passwordKey);
        this.user = response.user;   
        var user = this.user;
        var finalPassword = user.password; 
      
        
  
        if(passwordKey == finalPassword){
          this._router.navigate(['/start']);
        }else{
          this.status ="failed";
        }
      },
      error => {
        console.log("The user doesn't exist", error);
        this.status = "failed";
        
      }
    )


  }

}
