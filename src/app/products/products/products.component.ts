import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Observable<any>;
  constructor(private ProductDataService: ProductDataService) { }

  ngOnInit(): void {
    this.products = this.ProductDataService.getAllProducts();
  }

}
export class ToolbarOverviewExample {}
