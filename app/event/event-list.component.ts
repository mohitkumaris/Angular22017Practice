/**
 * Created by mohitkumar on 7/8/2017.
 */
import {Component, OnInit} from "@angular/core";
import {EventService} from "./Shared/event.service";
import  { ToastrService} from "../common/toastr.service"

@Component({
selector:'event-list',
templateUrl:'./app/event/event-list.component.html'
})

export class EventListComponent implements OnInit{
    events:any[];
constructor(private eventservice:EventService,private toastrService:ToastrService){

}
ngOnInit(){
    this.events=this.eventservice.getEvents();

}
     handleClickEvent(data){

        console.log('received:',data);
    }

    handleThumbnailClick(eventName){

      this.toastrService.success(eventName);
    }
}