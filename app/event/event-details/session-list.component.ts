/**
 * Created by Mohit Kumar on 7/20/2017.
 */
import {Component, Input} from '@angular/core'
import {ISession} from "../Shared/event.model";

@Component({
    selector:'session-list',
    templateUrl:'./app/event/event-details/session-list.component.html'

})

export class SessionListComponent{
    @Input() sessions:ISession[]
}