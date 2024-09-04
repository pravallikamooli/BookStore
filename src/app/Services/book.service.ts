import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  create(data: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books', data);
  }

  edit(id: number): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  update(data: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:3000/books/${data.id}`, data);
  }
  deleteitem(id:number):Observable<Book>{
    return this.http.delete<Book>(`http://localhost:3000/books/${id}`);
  }
  getid(id:number):Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/books/${id}`)
  }
}
