/**
 * Created by mohitkumar on 7/8/2017.
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {EventsAppComponent} from "./events-app.component";
import {EventListComponent} from "./event/event-list.component";
import {EventThumbnailComponent} from "./event/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";

@NgModule({

    imports:[BrowserModule],
    declarations:[EventsAppComponent,EventListComponent,EventThumbnailComponent,NavBarComponent
    ],
    bootstrap:[EventsAppComponent]
})

export class AppModule{

}