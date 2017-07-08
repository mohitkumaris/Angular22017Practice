/**
 * Created by mohitkumar on 7/8/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector:'event-thumbnail',
    templateUrl:'./app/event/event-thumbnail.component.html'
})

export class EventThumbnailComponent{

   @Input() event:any;
   /*@Output() eventClick=new EventEmitter();

    handleClickMe(){
        this.eventClick.emit();
    }*/


}