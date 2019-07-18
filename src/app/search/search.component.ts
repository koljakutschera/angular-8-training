import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";

import { Book } from "../shared/book";
import { BookStoreService } from "../shared/book-store.service";

@Component({
  selector: "bm-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<Book>();
  isLoading = false;
  keyup = new EventEmitter<string>();
  foundBooks: Book[] = [];
  constructor(private bs: BookStoreService) {}
  ngOnInit() {
    this.keyup
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.isLoading = true)),
        // tap(val => console.log(`BEFORE MAP: ${val}`)),
        switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
        // tap(val => console.log(`AFTER MAP: ${JSON.stringify(val)}`)),
        tap(() => (this.isLoading = false))
      )
      .subscribe(books => (this.foundBooks = books));
  }
}
