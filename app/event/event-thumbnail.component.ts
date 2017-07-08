/**
 * Created by mohitkumar on 7/8/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector:'event-thumbnail',
    template:`
        
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Price: \${{event.price}}</div>
            <div>Time: {{event.time}}</div>
        </div>
        <button class="btn btn btn-primary" (click)="handleClickMe()">Click Me! </button>
    `
})

export class EventThumbnailComponent{

   @Input() event:any;
   @Output() eventClick=new EventEmitter();

    handleClickMe(){
        this.eventClick.emit();
    }


}