/**
 * Created by mohitkumar on 7/15/2017.
 */
import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import {EventService} from "./event.service";



 @Injectable()
 export class EventListResolver implements Resolve<any>{
    constructor(private eventservice:EventService){}

    resolve(){
        return this.eventservice.getEvents();
    }
 }