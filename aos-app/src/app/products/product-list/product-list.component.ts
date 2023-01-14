import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[]= [];
 
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  addProduct(){
    this.router.navigate(['add'],{relativeTo: this.activatedRoute});
  }

  deleteProduct(id : number){
    this.productService.deleteProduct(id).subscribe(resp => {
      this.getAllProducts();
    });
   
  }

  updateProduct(id : number, product : Product){
    console.log("updateProduct with ID= ", id);
    this.productService.product=product;
    this.router.navigate(['update', id],{relativeTo : this.activatedRoute});
  }

  loadDetails(id : number, product : Product){
    console.log("loadDetails with ID= ", id);
    this.productService.product=product;
    this.router.navigate(['details', id],{relativeTo : this.activatedRoute});
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(resp => {
      this.products = resp;
    });
  }

 

}