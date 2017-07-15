/**
 * Created by mohitkumar on 7/15/2017.
 */
import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl:'./app/user/profile.component.html'
})
export class ProfileComponent implements OnInit{
// This is Rective form Module

    profileForm:FormGroup;
constructor(private auth:AuthService,private router:Router){}

    private firstName:FormControl;
    private lastName:FormControl;


    ngOnInit(){
        this.firstName= new FormControl(this.auth.currentUser.firstname,Validators.required);
        this.lastName=new FormControl(this.auth.currentUser.lastname,Validators.required);
        this.profileForm=new FormGroup({

            firstName:this.firstName,
            lastName:this.lastName
        });

    }
    cancel(){
        this.router.navigate(['events'])
    }



    saveProfile(formValues){
        if(this.profileForm.valid) {
            this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['events'])
        }
    }
}