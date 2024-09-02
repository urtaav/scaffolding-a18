import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product, ProductService } from '../../data-access/product-store.service';
import ProductCardComponent from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export default class ProductListComponent {
  productService = inject(ProductService);

  products = toSignal(this.productService.getProducts());

  buy = (product: Product) => {
    alert(`You bought ${product.name}`);
  }
}
