import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry, map } from "rxjs/operators";

import { Book, Thumbnail } from "./book";
import { BookFactory } from "./book-factory";

@Injectable({
  providedIn: "root"
})
export class BookStoreService {
  private api = "https://book-monkey2-api.angular-buch.com";
  private headers: HttpHeaders = new HttpHeaders();
  books: Book[];
  constructor(private http: HttpClient) {
    this.headers.append("Content-Type", "application/json");
    /*
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
        "456",
        "Angular 2",
        ["Johannes Hoppe", "Danny Koppenhagen"],
        new Date(2017, 3, 1),
        "Grundlagen und fortgeschrittene Techniken",
        4,
        [new Thumbnail("/assets/angular-buch.jpg", "Buchcover")],
        "Mit Angular setzen Sie auf ein modernes..."
      )
    ];
    */
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
  getAll(): Observable<Array<Book>> {
    return this.http.get(`${this.api}/books`).pipe(
      retry(3),
      map((res: []) => res.map(rawBook => BookFactory.fromObject(rawBook))),
      catchError(this.handleError)
    );
  }
  getSingle(isbn: string): Observable<Book> {
    return this.http.get(`${this.api}/book/${isbn}`).pipe(
      retry(3),
      map((rawBook: {}) => BookFactory.fromObject(rawBook)),
      catchError(this.handleError)
    );
  }
  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, JSON.stringify(book), {
        headers: this.headers
      })
      .pipe(catchError(this.handleError));
  }
  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, JSON.stringify(book), {
        headers: this.headers
      })
      .pipe(catchError(this.handleError));
  }
  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`, {
        headers: this.headers
      })
      .pipe(catchError(this.handleError));
  }
}
