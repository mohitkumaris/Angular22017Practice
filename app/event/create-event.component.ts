/**
 * Created by Mohit Kumar on 7/12/2017.
 */
import { Component } from '@angular/core'
import { Router } from '@angular/router'
@Component({
templateUrl:"./app/event/create-event.component.html"

})

export  class CreateEventComponent{

    isDirty:boolean=true;

    constructor(private router:Router){}

    saveEvent(newEventForm){
        console.log(newEventForm);
    }

    cancel(){

        this.router.navigate(['/events']);

    }

}