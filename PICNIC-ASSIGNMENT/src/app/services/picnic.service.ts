import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicnicService {
SearchText = new BehaviorSubject('');
hideSearchBar:boolean=true;
  constructor(private http: HttpClient) { }

  getData(apiUrl:string) {
    return  this.http.get(apiUrl);
  }
}
