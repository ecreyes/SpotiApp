import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {
    let noimage = "assets/img/noimage.png";
    if(!imagenes){
      return noimage;
    }else{
      return (imagenes.length>1)? imagenes[1].url:noimage;
    }
  }

}
