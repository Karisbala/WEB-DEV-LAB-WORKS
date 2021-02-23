import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(url: string,name: string) {
    window.open("https://telegram.me/share/url?url="+name+"&text="+url);
  }
}
