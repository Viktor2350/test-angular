import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(news, value) {
    return news.filter((news) => {
      return news.includes(value);
    });
  }
}
