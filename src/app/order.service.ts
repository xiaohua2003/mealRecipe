import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {User} from './user'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
url='http://localhost:3000/order'
  constructor(private http: HttpClient) {
   }
   order(User:User){
  return this.http.post(this.url,User).pipe(catchError(this.errorHandler))
   }
   errorHandler(error:HttpErrorResponse){
     return throwError(()=>{return error})
   }
}
