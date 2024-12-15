import { Routes } from '@angular/router';
import { BooksComponent } from './+Pages/books/books.component';
import { BorrowsComponent } from './+Pages/borrows/borrows.component';
import { MembersComponent } from './+Pages/members/members.component';

export const routes: Routes = [

    { path: 'books', component: BooksComponent },
    { path: 'members', component: MembersComponent },
    { path: 'borrows', component: BorrowsComponent },
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: '**', redirectTo: '/books' }
];
