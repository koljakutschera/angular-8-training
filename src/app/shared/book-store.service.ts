import { Injectable } from "@angular/core";

import { Book, Thumbnail } from "./book";

@Injectable({
  providedIn: "root"
})
export class BookStoreService {
  books: Book[];
  constructor() {
    this.books = [
      new Book(
        "123",
        "Angular 1",
        ["Johannes Hoppe", "Danny Koppenhagen"],
        new Date(2017, 3, 1),
        "Grundlagen und fortgeschrittene Techniken",
        5,
        [new Thumbnail("/assets/angularjs-buch.jpg", "Buchcover")],
        "Mit Angular setzen Sie auf ein modernes..."
      ),
      new Book(
        "1234",
        "Angular 2",
        ["Johannes Hoppe", "Danny Koppenhagen"],
        new Date(2017, 3, 1),
        "Grundlagen und fortgeschrittene Techniken",
        4,
        [new Thumbnail("/assets/angular-buch.jpg", "Buchcover")],
        "Mit Angular setzen Sie auf ein modernes..."
      )
    ];
  }
  getAll() {
    return this.books;
  }
}
