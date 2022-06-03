import { Component, OnInit, resolveForwardRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  books = [
    {id:1, path: "../../assets/books/book1.png"},
    {id:2, path: "../../assets/books/book2.png"},
    {id:3, path: "../../assets/books/book3.png"},
    {id:4, path: "../../assets/books/book4.png"},
    {id:5, path: "../../assets/books/book5.png"},
    {id:6, path: "../../assets/books/book6.png"},
    {id:7, path: "../../assets/books/book7.png"},
    {id:8, path: "../../assets/books/book8.png"},
  ];

  books2 = [
    {id:8, path: "../../assets/books/book8.png"},
    {id:1, path: "../../assets/books/book1.png"},
    {id:2, path: "../../assets/books/book2.png"},
    {id:3, path: "../../assets/books/book3.png"},
    {id:4, path: "../../assets/books/book4.png"},
    {id:5, path: "../../assets/books/book5.png"},
    {id:6, path: "../../assets/books/book6.png"},
    {id:7, path: "../../assets/books/book7.png"},
  ];

  clicking(name: number) {
    console.log(name)
  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
       this.books,
       event.previousIndex,
       event.currentIndex
      );

      let reorder = () => {

        let booksVoid: any[] = [];
        
        this.books.forEach((book)=> {
          booksVoid.push(book.id)
        })

        let booksStringed = booksVoid.toString()
        console.log(booksStringed)
      }

      reorder()

      // console.log(this.books, this.books2)

      if (this.books !== this.books2) {
        console.log('Giusta combinazione');
      }
      
    }

  ngOnInit(): void {
  }

}
