/**
 * Created by mohitkumar on 7/8/2017.
 */
import {Component, OnInit} from "@angular/core";
import {EventService} from "./Shared/event.service";
import  { ToastrService} from "../common/toastr.service"
import {ActivatedRoute} from "@angular/router";

@Component({

templateUrl:'./app/event/event-list.component.html'
})

export class EventListComponent implements OnInit{
    events:any[];
constructor(private eventservice:EventService,private toastrService:ToastrService,
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

    handleThumbnailClick(eventName){

      this.toastrService.success(eventName);
    }
}