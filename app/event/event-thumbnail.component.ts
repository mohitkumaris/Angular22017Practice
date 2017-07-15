/**
 * Created by mohitkumar on 7/8/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IEvent} from "./Shared/event.model";

@Component({
    selector:'event-thumbnail',
    templateUrl:'./app/event/event-thumbnail.component.html',
    styles:[`.green {color: #51a351}
              .red {color: #bd362f;font-weight: bold}`]
})

export class EventThumbnailComponent{

   @Input() event:IEvent;
   @Output() eventClick=new EventEmitter();

    handleClickMe(){
        this.eventClick.emit();
    }
  getEarlyTimeClass(){
      const EarlyClass=this.event && this.event.time === '8:00 am';
      const LateCLass=this.event && this.event.time === '10:00 am';
      return { green:EarlyClass,red:LateCLass }

      // we can return like 'green'
      // and we can return like ['green','bold']
      // So there are 3 ways to return class object
  }

}