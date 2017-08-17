/**
 * Created by Mohit Kumar on 8/9/2017.
 */
import { Pipe,PipeTransform} from '@angular/core'

@Pipe({name:'duration'})
export class DurationPipe implements PipeTransform{

    transform(value:number):string{

        switch(value){
            case 1:
                return 'Half hour';
            case 2:
                return 'One Hour';
            case 3: return 'Two Hour';
            case 4: return 'Three Hour';
            default:return value.toString();
        }
    }
}
