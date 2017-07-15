/**
 * Created by mohitkumar on 7/15/2017.
 */
import {Component} from '@angular/core'
import {AuthService} from "./auth.service";
import { Router } from "@angular/router"

@Component({

    templateUrl:'./app/user/login.component.html'

})

export class LoginComponent
{
    constructor(private authservice:AuthService,private router:Router){}

    login(LoginForm){
        this.authservice.loginUser(LoginForm.userName,LoginForm.password);
        this.router.navigate(['events'])

    }

    cancel(){
        this.router.navigate(['events'])
    }

}
