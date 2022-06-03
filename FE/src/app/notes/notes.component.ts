import { Component, OnInit, resolveForwardRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { NotesService } from '../notes/notes.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  constructor(private NotesService: NotesService) { }

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

        let booksCombination = "8,5,3,4,1,2,6,7";

        if(booksStringed == booksCombination) {
          // console.log('Combinazione esatta')
          alert('Leoculo')
        }
      }

      reorder()

      this.NotesService.getCombination().subscribe((res) => {
        console.log(res)
      })
      
    }

  ngOnInit(): void {
  }

}
