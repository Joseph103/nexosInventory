import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // listProducts: Product[] = [
  //   {name:'Corvette', amount:29, userNexos:'Joseph', dateEntry: this.date, dateModify: this.date},
  //   {name:'Corvette', amount:29, userNexos:'Joseph', dateEntry: this.date, dateModify: this.date},
  //   {name:'Corvette', amount:29, userNexos:'Joseph', dateEntry: this.date, dateModify: this.date}
  // ]

  url='http://localhost:8889/api/inventory/product/';

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  //HttpClient API getProducts()
  getProducts():Observable<any>{
    return this.http.get(this.url+"get")
    .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API saveProduct() 
  saveProduct(product:Product):Observable<any>{
    return this.http.post(this.url+"save", JSON.stringify(product), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API editProduct() 
  editProduct(product:Product):Observable<any>{
    return this.http.post(this.url+"edit", JSON.stringify(product), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API deleteProduct() 
  deleteProduct(product:Product):Observable<any>{
    return this.http.post(this.url+"delete", JSON.stringify(product), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling 
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
