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
    EventRouteActivator,CreateSessionComponent,SessionListComponent,DurationPipe
} from './event/index'

import {NavBarComponent} from "./nav/navbar.component";
import {TOASTR_TOKEN} from "./common/toastr.service";

import { appRoutes } from "./routes"
import {RouterModule} from "@angular/router";

import {Error404Component} from "./error/error.404.component";
import {AuthService} from "./user/auth.service";
import {FormsModule,ReactiveFormsModule } from "@angular/forms";
import {CollapsibleWellComponent} from "./common/collapsible-well.component";

declare let toastr:any;

@NgModule({

    imports:[BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes) ],
    declarations:[EventsAppComponent,EventListComponent,EventThumbnailComponent,NavBarComponent,
        EventDetailsComponent,CreateEventComponent,Error404Component,
        CreateSessionComponent,SessionListComponent,CollapsibleWellComponent,DurationPipe],
    providers:[
        EventService,
        {provide:TOASTR_TOKEN,useValue:toastr},
        EventRouteActivator,
        { provide:'CanDeactivateMethod',useValue:checkDirtyState },
        EventListResolver,
        AuthService],
    bootstrap:[EventsAppComponent]
})

export class AppModule{}

    function checkDirtyState(component:CreateEventComponent){

    if(component.isDirty)
   return window.confirm('Do you really want to exit ?');
      return true;
    }
