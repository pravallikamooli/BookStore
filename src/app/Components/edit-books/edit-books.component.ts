import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../Model/book';
import { BookService } from '../../Services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  formData: Book = {
    id: 0,
    title: '',
    author: '',
    publicationDate: '',
    price: 0
  };

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = Number(paramMap.get('id'));
      this.getById(id);
    });
  }

  getById(id: number): void {
    this.bookService.edit(id).subscribe((data) => {
      this.formData = data;
    });
  }
submit(){
  this.bookService.update(this.formData).subscribe({
    next:(data)=>{
      this.router.navigate(['/list'])
    },
    error:(er)=>{
      console.log(er)
    }
  })
}
 
}
