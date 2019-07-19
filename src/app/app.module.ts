import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import de from "@angular/common/locales/de";

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
import { IsbnPipe } from './shared/isbn.pipe';
import { ZoomDirective } from './shared/zoom.directive';
import { DelayDirective } from './shared/delay.directive';

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent,
    SearchComponent,
    BookFormComponent,
    IsbnPipe,
    ZoomDirective,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ],
  providers: [BookStoreService, { provide: LOCALE_ID, useValue: "de-at" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
