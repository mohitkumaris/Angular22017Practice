/**
 * Created by Mohit Kumar on 7/12/2017.
 */
import {Component, OnInit} from "@angular/core"
import {EventService} from "../Shared/event.service";
import {ActivatedRoute } from "@angular/router"
import {IEvent, ISession} from "../Shared/event.model";

@Component({
templateUrl:'./app/event/event-details/event-details.component.html',
    styles:[`.event-image{ height: 100px } 
    .container { padding-left: 20px; padding-right: 20px}
    a {cursor: pointer} `]
})

export  class EventDetailsComponent implements OnInit{

    AddMode:boolean
    event:IEvent;
    filterBy:string="all";
    constructor  (private eventService:EventService,private route:ActivatedRoute){
    }

ngOnInit(){

    this.event=this.eventService.getEvent(+this.route.snapshot.params['id']);

}

    addSession(){
    this.AddMode=true;

    }

    saveNewSessionOnEventDetail(session:ISession){
        const nextId=Math.max.apply(null,this.event.sessions.map(s=>s.id));
        session.id=nextId+1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.AddMode=false;

    }

    CancelNewSession(){
        this.AddMode=false;
    }

}