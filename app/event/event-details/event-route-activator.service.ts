/**
 * Created by Mohit Kumar on 7/12/2017.
 */
import { ActivatedRouteSnapshot,CanActivate,Router } from "@angular/router"
import { Injectable} from "@angular/core"
import { EventService } from "../Shared/event.service"


@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventservice:EventService,private router:Router){}


    canActivate(route:ActivatedRouteSnapshot){

       const eventExists= !! this.eventservice.getEvent(+route.params['id'])

        if(!eventExists)
        {
            this.router.navigate(['/404']);
        }

        return eventExists;
    }

}