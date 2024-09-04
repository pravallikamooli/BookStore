import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../Services/book.service';
import { Router } from '@angular/router';
import { Book } from '../../Model/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  formData: Book = {
    id: 0,
    title: '',
    author: '',
    publicationDate: '',
    price: 0
  };

  constructor(private bookService: BookService, private router: Router) {}

  submit() {
    this.bookService.create(this.formData).subscribe({
      next: (data) => {
        this.router.navigate(['/list']); // Navigate to the book list component
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
