import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productexists: boolean = true;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute, private _location: Location,
    ) {
   
  }

  product: Product;
  ngOnInit(): void {
    this.product=this.productService.product;
    if(this.product == null){
      let id = this.activatedRoute.snapshot.paramMap.get("id");
      this.productService.getProduct(Number(id)).subscribe(
        resp => {
          if(resp != null){
            this.product = resp;
          }
        }, (err) => {
          debugger;
          this.productexists = false;
          console.log("err " + err) ;
          // throw new Error('Failed');
        }
      );
    }
  }

  previousPage(){
    this._location.back();
  }

}