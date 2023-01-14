import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
   
  }

  ngOnInit(): void {
  }
  searchProduct(searchForm){
    console.log(searchForm.value);
    this.route.navigate(['products/details', searchForm.value.searchId],{relativeTo : this.activatedRoute});
   
  }
}