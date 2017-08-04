/**
 * Created by Mohit Kumar on 8/4/2017.
 */
import {Component, Input} from "@angular/core";
export {Component} from '@angular/core'

@Component({

    selector:'collapsible-well',
    template:`<div (click)="toggleContent()" class="well pointable">
       <ng-content select="[well-title]">
           
       </ng-content>
        <ng-content *ngIf="dataVisible" select="[well-body]"></ng-content>
    </div>`

})

export class CollapsibleWellComponent{


    dataVisible:boolean=false;

    toggleContent(){
        this.dataVisible=!this.dataVisible;
    }

}