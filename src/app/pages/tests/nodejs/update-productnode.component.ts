import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/http/apinodejs/product.service';

@Component({
  selector: 'app-update-product',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Update Product</h2>

      <div class="form-group">
        <label for="productName">Nom</label>
        <input
          id="productName"
          type="text"
          class="form-control"
          [(ngModel)]="product.nom"
          placeholder="Enter product name"
        />
      </div>

      <div class="form-group mt-2">
        <label for="productDescription">Description</label>
        <input
          id="productDescription"
          type="text"
          class="form-control"
          [(ngModel)]="product.description"
          placeholder="Enter product description"
        />
      </div>

      <div class="form-group mt-2">
        <label for="productPrix">Prix</label>
        <input
          id="productPrix"
          type="number"
          class="form-control"
          [(ngModel)]="product.prix"
          placeholder="Enter product price"
        />
      </div>

      <div class="form-group mt-2">
        <label for="productCategory">Categorie</label>
        <input
          id="productCategory"
          type="text"
          class="form-control"
          [(ngModel)]="product.categorie_nom"
          placeholder="Enter product category"
        />
      </div>

      <button class="btn btn-primary mt-2" (click)="updateProduct()">
        Save
      </button>
    </div>
  `,
  styles: [],
})
export class UpdateProductnodeComponent implements OnInit {
  product: any = {};

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProducts().subscribe((products) => {
        const foundProduct = products.find((prod) => prod._id === productId);
        if (foundProduct) {
          this.product = foundProduct;
        }
      });
    }
  }

  updateProduct(): void {
    if (this.product._id) {
      this.productService
        .updateProduct(this.product._id, this.product)
        .subscribe({
          next: () => {
            alert('Produit mis à jour avec succès !');
            this.router.navigate(['/products-node']); // Redirection vers la liste des produits
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour du produit :', error);
          },
        });
    }
  }
}