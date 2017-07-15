import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {Routes} from "@angular/router";
/**
 * Created by mohitkumar on 7/15/2017.
 */




export const userRoutes:Routes=[
    {path:'profile',component: ProfileComponent},
    {path:'login',component:LoginComponent}
    //'user/profile'
]