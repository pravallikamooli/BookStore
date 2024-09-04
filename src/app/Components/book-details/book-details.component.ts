import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { Book } from '../../Model/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

constructor(
  private bookService: BookService,
  private router: Router,
  private route: ActivatedRoute
){}
ngOnInit(): void {
  this.route.paramMap.subscribe((paramMap) => {
    const id = Number(paramMap.get('id'));
    this.getById(id);
  });
}
getById(id: number): void {
  this.bookService.getid(id).subscribe((data) => {
    this.book= data;
  });
}
close(): void {
  this.router.navigate(['/list']);
}
}
