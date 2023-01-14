import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry , map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product?: Product;

  productsChanged = new Subject<Product[]>();

  serverUrl = `http://localhost:9999/api/products`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Cache-Control' : 'no-cache',
      'Pragma' : 'no-cache'
    }),
    observe: "response" as 'body'
  };

  // private products: Product[] =[
  //   new Product(1, "keyboard", "description 1"), 
  //   new Product(2, "Laptop", "description 2"), 
  //   new Product(3, "Mouse", "description 3"), 
  // ]

  constructor(private http: HttpClient) { }

  getProducts(){
   // return this.products.slice();
   return this.http.get<any>(this.serverUrl);
  }

  getProduct(id : number){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: id
      }
    }
    return this.http.get<any>(this.serverUrl + "/" + id, options);
  }

  addProduct(product : Product){
    console.log("Calling addProduct");
    return this.http.post(
      this.serverUrl,
      product,
      this.httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: id
      }
    }
    console.log("Calling deleteProduct with " + this.serverUrl+ "/" +id );
    return this.http.delete(this.serverUrl+ "/" +id, options);
   // this.http.delete(`${this.serverUrl}/${id}`);
    //this.productsChanged.
  }

  private ReturnResponseData(response: any) {
    return response;
  }
  private handleError(error: any) {
    return throwError(error);
  }

  updateProduct(id: number, product : Product){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: id,
        product:product
      }
    }
    return this.http.put(
      this.serverUrl+ "/" +id,
      product,
      options)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }


}

