import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BOOKS } from 'src/mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books = BOOKS;

  selectedBook?: Book;

  blankBook: Book =   {
    title: '',
    author: '',
    year: 0,
    genre: '',
  }

  constructor() {}

  ngOnInit(): void {
    this.books.sort((a, b) => a.title.localeCompare(b.title));
    this.books.sort((a, b) => a.author.localeCompare(b.author));
  }

  onSelect(book: Book): void {
    if (this.selectedBook === book) {
      this.selectedBook = this.blankBook;
    } else {
      this.selectedBook = book;
    }
  }
}
