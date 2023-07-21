import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private _http: HttpClient) { }

  getChiste():Observable<any>{
    return this._http.get<any[]>('https://official-joke-api.appspot.com/random_joke')
  }
}
