/**
 * Created by Mohit Kumar on 7/20/2017.
 */
import {Component, Input,OnChanges} from '@angular/core'
import {ISession} from "../Shared/event.model";

@Component({
    selector:'session-list',
    templateUrl:'./app/event/event-details/session-list.component.html'

})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[];
    @Input() filterBy:string;
    @Input() SortBy:string;
    VisibleSession:ISession[]=[];

    ngOnChanges(){
        if(this.sessions){
            this.filterSession(this.filterBy);
        }
    }

    filterSession(filterBy:string){
          if(filterBy === 'all'){
              this.VisibleSession=this.sessions.slice(0);
          }
          else {
              this.VisibleSession=this.sessions.filter(session=>{

               return session.level.toLowerCase()===filterBy;
              })
          }

    }
}