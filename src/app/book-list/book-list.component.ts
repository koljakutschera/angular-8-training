import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Book } from "../shared/book";
import { BookStoreService } from "../shared/book-store.service";

@Component({
  selector: "bm-book-list",
  templateUrl: "./book-list.component.html",
  styles: []
})
export class BookListComponent implements OnInit {
  @Output() showDetailsEvent = new EventEmitter<Book>();
  books: Book[];
  constructor(private bs: BookStoreService) {}
  ngOnInit() {
    this.books = this.bs.getAll();
  }
  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }
}
