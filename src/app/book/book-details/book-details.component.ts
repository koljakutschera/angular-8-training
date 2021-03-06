import { Component, OnInit } from "@angular/core";
import { Book } from "../../shared/book";
import { BookStoreService } from "../../shared/book-store.service";
import { ActivatedRoute, Router } from "@angular/router";

import { BookFactory } from "../../shared/book-factory";

@Component({
  selector: "bm-book-details",
  templateUrl: "./book-details.component.html",
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book = BookFactory.empty();
  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    /*
     * Without resolver ...
     *
    const params = this.route.snapshot.params;
    this.bs.getSingle(params.isbn).subscribe(res => (this.book = res));
    */
    this.book = this.route.snapshot.data.book;
  }
  getRating(num: number) {
    return new Array(num);
  }
  removeBook() {
    if (confirm("Buch wirklick löschen?")) {
      this.bs.remove(this.book.isbn).subscribe(res =>
        this.router.navigate(["../"], {
          relativeTo: this.route
        })
      );
    }
  }
}
