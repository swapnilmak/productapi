import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productForm;
  product: Product;
  constructor(private formBuilder: FormBuilder, private productService: ProductService,
    private router: Router, private activetedRoute: ActivatedRoute,
    private _location: Location) {
      this.productForm = this.formBuilder.group({
        id:[""],
        name:[ "", Validators.required],
        description:["", Validators.required],
        details: this.formBuilder.group({
          detailsId:[""],
          specification:["", Validators.required],
          quantity:["", Validators.required],
          price:["", Validators.required]
        })
      });
  }

  ngOnInit(): void {
    debugger;
    this.product=this.productService.product;
    if(this.product != null){
      this.initalizeForm();
    }else{
      let id = this.activetedRoute.snapshot.paramMap.get("id");
      this.productService.getProduct(Number(id)).subscribe(
        resp => {
          if(resp != null){
            this.product = resp;
            this.initalizeForm();
          }
        }, (err) => {
          console.log("err " + err) ;
          // throw new Error('Failed');
        }
      );
    }
  }

  onSubmit(){
    debugger;
    this.productForm.value.id = this.product.id;
    this.productService.updateProduct(this.productForm.value.id, this.productForm.value).subscribe(resp => {
      debugger;
     this.router.navigate(["/products"]);
    });
  }

  initalizeForm(){
    this.productForm = this.formBuilder.group({
      id:[{
        value: this.product.id,
        disabled: true
      }],
      name:[ this.product.name, Validators.required],
      description:[this.product.description, Validators.required],
      details: this.formBuilder.group({
        detailsId:[this.product.details.detailsId],
        specification:[this.product.details.specification, Validators.required],
        quantity:[this.product.details.quantity, Validators.required],
        price:[this.product.details.price, Validators.required]
      })
    });
  }

  previousPage(){
    this._location.back();
  }
}