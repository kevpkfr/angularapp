import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {

    const response = this.httpClient.get("http://escuelajs.co/api/v1/products").subscribe
      (response => {
        console.log(response);
      })



  }



}





s
