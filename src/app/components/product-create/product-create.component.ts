import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { UserNexos } from 'src/app/models/user-nexos';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  @Input() product:Product = {name: '', amount: 0, entryDate: new Date, id:0, modificationDate:new Date, userId:{id:4, name:"Joseph",age:26, entryDate:new Date("2021-02-16"), idCargo:{id:1, name:"Manager"}}}

  constructor(public ProductoService: ProductoService, public actRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  }

   // create product data
   saveProduct() {
      this.ProductoService.saveProduct(this.product).subscribe(data => {
        this.router.navigate(['/product'])
      })
  }
}
