import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { UserSearchComponent } from './user-service/feature/user-search/user-search.component';
import { AddUserComponent } from './user-service/feature/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    AddBookComponent,
    UserSearchComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
