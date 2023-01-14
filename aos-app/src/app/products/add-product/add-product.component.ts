import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm;

  constructor(private formBuilder: FormBuilder, private productService: ProductService,
    private router: Router, private _location: Location) {
    this.productForm = this.formBuilder.group({
      name:['', Validators.required],
      description:['', Validators.required],
      details: this.formBuilder.group({
        specification:['', Validators.required],
        quantity:['', Validators.required],
        price:['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.productService.addProduct(this.productForm.value).subscribe(resp => {
      debugger;
     this.router.navigate(["/products"]);
    });
  }

  previousPage(){
    this._location.back();
  }

}