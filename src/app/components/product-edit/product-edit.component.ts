import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {

  product:Product = this.actRoute.snapshot.params['product'];
  Date = new Date();
  
  constructor(public ProductoService: ProductoService, 
    public actRoute: ActivatedRoute, 
    public router: Router) {
     this.router.getCurrentNavigation()?.extras.state
     }

  ngOnInit(): void {
    this.product=history.state;
  }


   // edit product data
   editProduct() {
    
    if(window.confirm('¿Esta seguro que decea actualizar el registro?')){
      this.ProductoService.editProduct(this.product).subscribe(data => {
        this.router.navigate(['/product'])
      })
    }
   }

}
