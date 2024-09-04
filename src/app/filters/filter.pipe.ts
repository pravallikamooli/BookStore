import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../Model/book';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], searchTerm: string): Book[] {
    if (!books || !searchTerm) {
      return books;
    }
    return books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
