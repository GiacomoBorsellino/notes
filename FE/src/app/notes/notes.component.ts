import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
  ];

  books = [
    "../../assets/books/book1.png",
    "../../assets/books/book2.png",
    "../../assets/books/book3.png",
    "../../assets/books/book4.png",
    "../../assets/books/book5.png",
    "../../assets/books/book6.png",
    "../../assets/books/book7.png",
    "../../assets/books/book8.png"
  ];

  clicking(name: string) {
    console.log(name)
  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
       this.books,
       event.previousIndex,
       event.currentIndex
      );
    }

  ngOnInit(): void {
  }

}
