/**
 * Created by mohitkumar on 7/8/2017.
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {EventsAppComponent} from "./events-app.component";
import {
    EventListComponent,EventThumbnailComponent,
    EventService,EventDetailsComponent,
    CreateEventComponent,EventListResolver,
    EventRouteActivator
} from './event/index'

import {NavBarComponent} from "./nav/navbar.component";
import {ToastrService} from "./common/toastr.service";
import { appRoutes } from "./routes"
import {RouterModule} from "@angular/router";
import {} from "./event/create-event.component";
import {Error404Component} from "./error/error.404.component";



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
