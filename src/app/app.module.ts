import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { DateValueAccessorModule } from "angular-date-value-accessor";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BookListComponent } from "./book-list/book-list.component";
import { BookListItemComponent } from "./book-list-item/book-list-item.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookStoreService } from "./shared/book-store.service";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { BookFormComponent } from "./book-form/book-form.component";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent,
    SearchComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
