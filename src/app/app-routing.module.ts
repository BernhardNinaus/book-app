import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddUserComponent } from './user-service/feature/add-user/add-user.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { UserSearchComponent } from './user-service/feature/user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'search', component: BookSearchComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'add-user', component: AddUserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
