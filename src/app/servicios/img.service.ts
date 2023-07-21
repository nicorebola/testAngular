import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private _http: HttpClient) { }

  getImg():Observable<any>{
    return this._http.get<any[]>('https://dog.ceo/api/breeds/image/random')
  }
}
