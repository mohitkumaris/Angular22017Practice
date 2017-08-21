/**
 * Created by mohitkumar on 7/8/2017.
 */
import {Component, OnInit} from "@angular/core";
import {EventService} from "./Shared/event.service";

import {ActivatedRoute} from "@angular/router";
import {IEvent} from "./Shared/event.model";

@Component({

templateUrl:'./app/event/event-list.component.html'
})

export class EventListComponent implements OnInit{
    events:IEvent[];
constructor(private eventservice:EventService,
private routes:ActivatedRoute){

}
ngOnInit(){
    // data coming using resolve in routes.ts
    // map method is used to fetch observable.
    // so internally its using subscribe here.
    this.events=this.routes.snapshot.data['events'];

}
     handleClickEvent(data){

        console.log('received:',data);
    }


}