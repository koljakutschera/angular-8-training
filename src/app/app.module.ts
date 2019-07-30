import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from "@angular/common";
import de from "@angular/common/locales/de";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BookStoreService } from "./shared/book-store.service";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { BookResolver } from "./shared/book-resolver.service";

registerLocaleData(de);

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    BookStoreService,
    { provide: LOCALE_ID, useValue: "de-at" },
    BookResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
