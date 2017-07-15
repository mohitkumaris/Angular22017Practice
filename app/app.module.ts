/**
 * Created by mohitkumar on 7/8/2017.
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {EventsAppComponent} from "./events-app.component";
import {EventListComponent} from "./event/event-list.component";
import {EventThumbnailComponent} from "./event/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {EventService} from "./event/Shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from "./event/event-details/event-details.component"
import { appRoutes } from "./routes"
import {RouterModule} from "@angular/router";
import {CreateEventComponent} from "./event/create-event.component";
import {Error404Component} from "./error/error.404.component";
import {EventRouteActivator} from "./event/event-details/event-route-activator.service";
import {EventListResolver} from "./event/Shared/event-list-resolver.service";


@NgModule({

    imports:[BrowserModule,
     RouterModule.forRoot(appRoutes) ],
    declarations:[EventsAppComponent,EventListComponent,EventThumbnailComponent,NavBarComponent,
        EventDetailsComponent,CreateEventComponent,Error404Component],
    providers:[
        EventService,
        ToastrService,
        EventRouteActivator,
        { provide:'CanDeactivateMethod',useValue:checkDirtyState },
        EventListResolver],
    bootstrap:[EventsAppComponent]
})

export class AppModule{}

    function checkDirtyState(component:CreateEventComponent){

    if(component.isDirty)
   return window.confirm('Do you really want to exit ?');
      return true;
    }
