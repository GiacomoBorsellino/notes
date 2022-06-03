import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  notesUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'; 

  constructor (     
    private http: HttpClient,
    ) { }

  getCombination(): Observable<any> {
    console.log('Service richiamato correttamente')
    let token = "aaa"
    const options = { params: new HttpParams().set('token', token) };
    return this.http.get<any>(this.notesUrl) // options
  }

}
