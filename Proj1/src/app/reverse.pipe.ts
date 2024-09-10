import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'reverse'
})
export class reversePipe implements PipeTransform{
    transform(str:string){
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
}