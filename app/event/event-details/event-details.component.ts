/**
 * Created by Mohit Kumar on 7/12/2017.
 */
import {Component, OnInit} from "@angular/core"
import {EventService} from "../Shared/event.service";
import {ActivatedRoute } from "@angular/router"
import {IEvent} from "../Shared/event.model";

@Component({
templateUrl:'./app/event/event-details/event-details.component.html',
    styles:[`.event-image{ height: 100px } .container { padding-left: 20px; padding-right: 20px}`]
})

export  class EventDetailsComponent implements OnInit{

    event:IEvent;
    constructor  (private eventService:EventService,private route:ActivatedRoute){
    }

ngOnInit(){

    this.event=this.eventService.getEvent(+this.route.snapshot.params['id']);

}

}