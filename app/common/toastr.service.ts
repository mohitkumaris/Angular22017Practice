/**
 * Created by Mohit Kumar on 7/11/2017.
 */
import { Injectable } from '@angular/core'

declare let toastr:any;

@Injectable()
export class ToastrService{

    success(message:string,title?:string){
        toastr.success(message,title);
    }

    info(message:string,title?:string){
        toastr.info(message,title);
    }


}