import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealInfoService {
  
  constructor(private http:HttpClient) { 
  }
  getImg(url:string){
  return this.http.get(url)
  }
}
