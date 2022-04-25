import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrypoint',
  templateUrl: './entrypoint.component.html',
  styleUrls: ['./entrypoint.component.css']
})

export class EntrypointComponent implements OnInit {

  constructor() { }

  login:boolean = false;
  signup:boolean = true;

  ngOnInit(): void {
  }

}
