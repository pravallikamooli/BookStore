import { Component, OnInit } from '@angular/core';
import { Book } from '../../Model/book';
import { BookService } from '../../Services/book.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FilterPipe } from '../../filters/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,FilterPipe,FormsModule,NgxPaginationModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  searchTerm: string = '';
  page: number = 1;


  constructor(private bookService: BookService,private router:Router) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe((data) => {
      this.bookList = data;
      

    });
  }
  delete(id:number){
    this.bookService.deleteitem(id).subscribe({
      next:(data)=>{
        this.bookList=this.bookList.filter(_=>_.id!=id);
        this.router.navigate(['/list']); 
      }
    })
  }
}
