import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Book } from "../../shared/book";
import { BookFactory } from "../../shared/book-factory";
import { BookStoreService } from "../../shared/book-store.service";
import { BookFormErrorMessages } from "./book-form-error-messages";
import { BookValidators } from "../shared/book.validators";

@Component({
  selector: "bm-book-form",
  templateUrl: "./book-form.component.html",
  styles: []
})
export class BookFormComponent implements OnInit {
  book = BookFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingBook = false;
  myForm: FormGroup;
  authors: FormArray;
  thumbnails: FormArray;
  constructor(
    private bs: BookStoreService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    /*
     * Without resolver...
     *
    const isbn = this.route.snapshot.params.isbn;
    if (isbn) {
      this.isUpdatingBook = true;
      this.bs.getSingle(isbn).subscribe(book => {
        this.book = book;
        this.initBook();
      });
    }
    */
    const data = this.route.snapshot.data;
    if (data.book) {
      this.isUpdatingBook = true;
      this.book = data.book;
    }
    this.initBook();
  }

  initBook() {
    this.buildAuthorsArray();
    this.buildThumbnailsArray();
    this.myForm = this.fb.group({
      title: [this.book.title, Validators.required],
      subtitle: this.book.subtitle,
      isbn: [
        this.book.isbn,
        [Validators.required, BookValidators.isbnFormat],
        this.isUpdatingBook ? null : BookValidators.isbnExists(this.bs)
      ],

      description: this.book.description,
      authors: this.authors,
      thumbnails: this.thumbnails,
      published: this.book.published
    });
    this.myForm.statusChanges.subscribe(() => {
      this.updateErrorMessages();
    });
  }

  buildAuthorsArray() {
    this.authors = this.fb.array(
      this.book.authors,
      BookValidators.atLeastOneAuthor
    );
  }

  buildThumbnailsArray() {
    this.thumbnails = this.fb.array(
      this.book.thumbnails.map(t =>
        this.fb.group({
          url: this.fb.control(t.url),
          title: this.fb.control(t.title)
        })
      )
    );
  }

  addAuthorControl() {
    this.authors.push(this.fb.control(null));
  }

  addThumbnailControl() {
    this.thumbnails.push(
      this.fb.group({
        url: null,
        title: null
      })
    );
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of BookFormErrorMessages) {
      const control = this.myForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    console.log("Before", this.myForm.value);
    this.myForm.value.authors = this.myForm.value.authors.filter(
      author => author
    );
    this.myForm.value.thumbnails = this.myForm.value.thumbnails.filter(
      thumbnail => thumbnail.url
    );
    console.log("After", this.myForm.value);
    const book: Book = BookFactory.fromObject(this.myForm.value);
    if (this.isUpdatingBook) {
      this.bs.update(book).subscribe(res => {
        this.router.navigate(["../../books", book.isbn], {
          relativeTo: this.route
        });
      });
    } else {
      this.bs.create(book).subscribe(res => {
        this.book = BookFactory.empty();
        this.myForm.reset(BookFactory.empty());
      });
    }
    /*
    this.book.authors = this.myForm.value.authors.split(",");
    this.book.thumbnails = [this.myForm.value.thumbnail];
    const book = BookFactory.fromObject(this.book);
    this.bs.create(book).subscribe(res => {
      this.book = BookFactory.empty();
      this.myForm.reset(BookFactory.empty());
    });
    */
  }
}
