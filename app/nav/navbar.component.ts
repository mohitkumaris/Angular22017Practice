/**
 * Created by mohitkumar on 7/8/2017.
 */
import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'

@Component({
    selector:'nav-bar',
    templateUrl:'./app/nav/navbar.component.html',
    styles:[`
        
        li > a.active { color: #bd362f;}
    `]
})
export class NavBarComponent{
    constructor(private auth:AuthService){}

}