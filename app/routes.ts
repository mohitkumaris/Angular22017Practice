/**
 * Created by Mohit Kumar on 7/12/2017.
 */
import {Routes} from "@angular/router"
import { EventListComponent} from "./event/event-list.component"
import { EventDetailsComponent } from "./event/event-details/event-details.component"
import {CreateEventComponent} from "./event/create-event.component";
import {Error404Component} from "./error/error.404.component";
import {EventRouteActivator} from "./event/event-details/event-route-activator.service";
import {EventListResolver} from "./event/Shared/event-list-resolver.service";
import {UserModule} from "./user/user.module";


export const appRoutes:Routes=[
    { path:'events', component:EventListComponent,resolve:{events:EventListResolver}},
    { path:'events/new',component:CreateEventComponent,canDeactivate:['CanDeactivateMethod']},
    { path:'events/:id',component:EventDetailsComponent, canActivate:[EventRouteActivator] },
    { path:'',redirectTo:'/events',pathMatch:'full'},
    { path:'404',component:Error404Component},
    { path:'user',loadChildren:'app/user/user.module#UserModule'}

];