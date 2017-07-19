/**
 * Created by Mohit Kumar on 7/12/2017.
 */
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import {EventService} from "./Shared/event.service";
@Component({
templateUrl:"./app/event/create-event.component.html",
styles:[`
        em {float:right;color: #bd362f;padding-left: 10px;}
        .error input { background-color:#bd362f }
        .error ::-webkit-input-placeholder {color:#999 }
    `]

})

export  class CreateEventComponent{

    isDirty:boolean=true;

    constructor(private router:Router,private eventservice:EventService){}



    saveEvent(newEventForm){
        this.eventservice.saveEvent(newEventForm);
        this.isDirty=false;
        this.router.navigate(['/events']);

    }

    cancel(){

        this.router.navigate(['/events']);

    }

}