import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router
import { Component, OnInit } from '@angular/core';
import { Product, JsonProductsService } from '../../../services/http/json/jsonproducts.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h1 class="text-center mb-4">Gestion des Produits</h1>

      <!-- Ajouter un produit -->
      <div class="mb-4">
        <div class="card-header">Ajouter un produit</div>
        <div class="card-body">
          <form (ngSubmit)="addProduct()" class="row g-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Nom</label>
              <input
                type="text"
                id="name"
                class="form-control"
                [(ngModel)]="newProduct.name"
                name="name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="price" class="form-label">Prix</label>
              <input
                type="number"
                id="price"
                class="form-control"
                [(ngModel)]="newProduct.price"
                name="price"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="categoryName" class="form-label">Catégorie name</label>
              <input
                type="text"
                id="categoryName"
                class="form-control"
                [(ngModel)]="newProduct.categoryName"
                name="categoryName"
                required
              />
            </div>
            <div class="col-md-12">
              <label for="description" class="form-label">Description</label>
              <textarea
                id="description"
                class="form-control"
                [(ngModel)]="newProduct.description"
                name="description"
                rows="3"
                required
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Ajouter</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Liste des produits -->
      <div >
        <h3> Liste des Produits</h3>
        <hr>
        <div class="row">
        <div
          *ngFor="let product of products"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 flex-wrap"
        >
          <div class="card d-flex flex-column mb-4 p-2">
            <strong>{{ product.name }}</strong>
            Prix : {{ product.price }} € - Catégorie : {{ product.categoryName }}<br />
            <em>{{ product.description }}</em>
            <div class="mt-2">
              <button
                class="btn btn-sm btn-warning me-2"
                (click)="navigateToUpdatePage(product.id)"
              >
                Modifier
              </button>
              <button
                class="btn btn-sm btn-danger"
                (click)="deleteProduct(product.id)"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class JsonProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    categoryName: '',
    description: '',
  };

  constructor(
    private jsonProductsService: JsonProductsService,
    private router: Router // Injecter le Router
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.jsonProductsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('data :', data);
    });
  }

  addProduct(): void {
    const newId =
      this.products.length > 0
        ? Math.max(...this.products.map((p) => p.id)) + 1
        : 1;
    const productToAdd = { ...this.newProduct, id: newId };

    this.jsonProductsService.addProduct(productToAdd).subscribe((product) => {
      this.products.push(product);
      this.newProduct = {
        id: 0,
        name: '',
        price: 0,
        categoryName: '',
        description: '',
      };
      this.fetchProducts();
    });
  }

  navigateToUpdatePage(productId: number): void {
    // Rediriger vers la page de mise à jour
    this.router.navigate(['/updateproduct-json', productId]);
  }

  deleteProduct(id: number): void {
    this.jsonProductsService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
    });
    this.fetchProducts();
  }
}
