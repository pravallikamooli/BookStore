import { Routes } from '@angular/router';
import { BookListComponent } from './Components/book-list/book-list.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { EditBooksComponent } from './Components/edit-books/edit-books.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';

export const routes: Routes = [
    {path:'create',component:AddBookComponent},
    {path:'list',component:BookListComponent},
    {path:'edit/:id',component:EditBooksComponent},
    {path:'details/:id',component:BookDetailsComponent}
];
