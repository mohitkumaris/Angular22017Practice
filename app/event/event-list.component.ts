/**
 * Created by mohitkumar on 7/8/2017.
 */
import {Component} from "@angular/core";


@Component({
selector:'event-list',
template:'<event-thumbnail [event]="event1" (eventClick)="handleClickEvent(event1.name)"></event-thumbnail>'
})

export class EventListComponent{

    event1={
        id:1,
        name:'Angular Connect',
        date:'9/26/2017',
        imageUrl:'/app/assets/images/angularconnect-shield.png  '
    }
    handleClickEvent(data){

        console.log('received:',data);
    }
}