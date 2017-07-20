
/**
 * Created by Mohit Kumar on 7/19/2017.
 */
import {Component, OnInit} from "@angular/core";
import { FormControl,FormGroup,Validators  } from '@angular/forms'
import { ISession } from '../Shared/event.model'
import {restrictedWords} from "../Shared/restricted-words.validators";

@Component({
templateUrl:'./app/event/event-details/create-session.component.html',
    styles:[`
        em {float:right;color: #bd362f;padding-left: 10px;}
        .error input { border-color:#bd362f }
        .error ::-webkit-input-placeholder {color:#999 }
    `]
})

export  class CreateSessionComponent implements OnInit{

    // reactive forms using model
newSessionForm:FormGroup;
name:FormControl;
presenter:FormControl;
duration:FormControl;
level:FormControl;
abstract:FormControl;

    ngOnInit(){

        this.name=new FormControl('',Validators.required);
        this.presenter=new FormControl('',Validators.required);
        this.duration=new FormControl('',Validators.required);
        this.level=new FormControl('',Validators.required);
        this.abstract=new FormControl('',[Validators.required,
            Validators.maxLength(400),restrictedWords(['foo','bar'])]);

        this.newSessionForm=new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract

        });

    }



    saveSession(formValues){
        let session:ISession={
            id:undefined,
            name:formValues.name,
            presenter:formValues.presenter,
            duration:formValues.duration,
            level:formValues.level,
            abstract:formValues.abstract,
            voters:[]

        }
        console.log(session);
    }
}
