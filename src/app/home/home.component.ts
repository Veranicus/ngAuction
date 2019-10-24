import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(productService: ProductService) { }

  ngOnInit() {
  }

}
