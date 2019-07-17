import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Book, Thumbnail } from "../shared/book";

@Component({
  selector: "bm-book-list",
  templateUrl: "./book-list.component.html",
  styles: []
})
export class BookListComponent implements OnInit {
  @Output() showDetailsEvent = new EventEmitter<Book>();
  books: Book[];
  constructor() {}
  ngOnInit() {
    this.books = [
      new Book(
        "123",
        "Angular 1",
        ["Johannes Hoppe", "Danny Koppenhagen"],
        new Date(2017, 3, 1),
        "Grundlagen und fortgeschrittene Techniken",
        5,
        [new Thumbnail("https://angular-buch.de/cover2.jpg", "Buchcover")],
        "Mit Angular setzen Sie auf ein modernes..."
      ),
      new Book(
        "1234",
        "Angular 2",
        ["Johannes Hoppe", "Danny Koppenhagen"],
        new Date(2017, 3, 1),
        "Grundlagen und fortgeschrittene Techniken",
        4,
        [new Thumbnail("https://angular-buch.de/cover2.jpg", "Buchcover")],
        "Mit Angular setzen Sie auf ein modernes..."
      ),
      new Book(
        "12345",
        "Angular 3",
        ["Johannes Hoppe", "Danny Koppenhagen"],
        new Date(2017, 3, 1),
        "Grundlagen und fortgeschrittene Techniken",
        3,
        [new Thumbnail("https://angular-buch.de/cover2.jpg", "Buchcover")],
        "Mit Angular setzen Sie auf ein modernes..."
      )
    ];
  }
  showDetails(book: Book) {
    console.log(book);
    this.showDetailsEvent.emit(book);
  }
}
