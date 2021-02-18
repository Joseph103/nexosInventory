import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductoService } from 'src/app/service/producto.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listProducts: Product[] = [];
  listProductsFilter: Product[] = [];
  filterProduct: string = "";
  constructor(private _productoService: ProductoService, public actRoute: ActivatedRoute,
    public router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._productoService.getProducts().subscribe(data => {
      this.listProducts = data
      this.listProductsFilter = data
    });
  }

  filterTable() {
    !this.filterProduct.length ? this.listProducts = this.listProductsFilter : ''


    this.listProducts = this.listProducts.filter((item) => {
      console.log(this.datepipe.transform(item.entryDate, 'yyyy-MM-dd'))
      if (item.name.toLocaleLowerCase().includes(this.filterProduct.toLocaleLowerCase())) {
        return item;
      }else if (item.userId.name.toLocaleLowerCase().includes(this.filterProduct.toLocaleLowerCase())) {
        return item;
      }else if (this.datepipe.transform(item.entryDate, 'yyyy-MM-dd')?.toString().includes(this.filterProduct)) {
        return item;
      }
      return null;

    });
  }

  deleteProduct(product: Product) {
    this._productoService.deleteProduct(product).subscribe(data => {
      this.router.navigate(['/product'])
    });

  }
}

