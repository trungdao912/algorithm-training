import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string): string {
    value = `+(84)${value}`;
    return value;
  }

}
