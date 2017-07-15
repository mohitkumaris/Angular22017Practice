/**
 * Created by mohitkumar on 7/15/2017.
 */
import {Injectable} from "@angular/core"
import {Iuser} from "./user.model";

@Injectable()
export class AuthService{
    currentUser:Iuser;
    loginUser(userName:string,password:string){

        this.currentUser={
            id:1,
            firstname :'Mohit',
            lastname:'Kumar',
            userName:userName

        }
    }

    IsAuthenticated(){
        return !!this.currentUser;
    }
}