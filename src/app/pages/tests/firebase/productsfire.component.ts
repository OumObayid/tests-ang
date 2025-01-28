import { CommonModule } from '@angular/common';
import { FirestoreService } from './../../../services/http/firebase/firestore.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Interface pour typer les produits
interface Product {
  id?: string; // ID facultatif (attribué par Firestore)
  nom: string;
  description?: string;
  prix: number;
  categorie_nom?: string;
}

@Component({
  selector: 'app-productsFirebase',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Ajout de FormsModule pour gérer les formulaires
  template: `
    <div class="container mt-3">
      <h1>CRUD Firebase avec Angular</h1>
      <hr />
      <h3>Ajouter un nouveau produit</h3>
      <!-- Formulaire d'ajout -->
      <form (ngSubmit)="addProduct()" #productForm="ngForm" class="mb-4">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom du produit</label>
          <input
            type="text"
            id="nom"
            class="form-control"
            [(ngModel)]="newProduct.nom"
            name="nom"
            required
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            id="description"
            class="form-control"
            [(ngModel)]="newProduct.description"
            name="description"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="prix" class="form-label">Prix</label>
          <input
            type="number"
            id="prix"
            class="form-control"
            [(ngModel)]="newProduct.prix"
            name="prix"
            required
          />
        </div>
        <div class="mb-3">
          <label for="categorie_nom" class="form-label">Catégorie</label>
          <input
            type="text"
            id="categorie_nom"
            class="form-control"
            [(ngModel)]="newProduct.categorie_nom"
            name="categorie_nom"
          />
        </div>
        <button
          type="submit"
          class="btn btn-success"
          [disabled]="productForm.invalid"
        >
          Ajouter le produit
        </button>
      </form>

      <hr />
      <h3>Liste des produits</h3>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          *ngFor="let product of products"
        >
          <div class="card p-2" style="width: 18rem; height: 100%">
            <div class="card-body">
              <strong>{{ product.nom }}</strong>
              <p>{{ product.description || 'Pas de description' }}</p>
              <span class="badge bg-primary">{{ product.prix }} $</span>
              <p>
                <strong>Catégorie: </strong
                >{{ product.categorie_nom || 'Non définie' }}
              </p>
            </div>
            <button
              class="btn btn-danger btn-sm mt-2"
              (click)="deleteProduct(product.id!)"
            >
              Supprimer
            </button>
            <button
              class="btn btn-warning btn-sm mt-2"
              [routerLink]="['/update-node', product.id]"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProductsfireComponent {
  products: Product[] = [];
  newProduct: Product = {
    nom: '',
    description: '',
    prix: 0,
    categorie_nom: '',
  };

  constructor(private firestoreService: FirestoreService) {
    this.fetchProducts();
  }

  /**
   * Ajoute un nouveau produit à partir du formulaire
   */
  addProduct() {
    if (!this.newProduct.nom || this.newProduct.prix <= 0) {
      console.error('Les champs obligatoires ne sont pas remplis.');
      return;
    }

    this.firestoreService
      .addDocument('angproducts', this.newProduct)
      .then(() => {
        console.log('Produit ajouté avec succès !');
        this.fetchProducts(); // Recharge les produits
        this.resetForm(); // Réinitialise le formulaire
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout du produit :', error);
      });
  }

  /**
   * Réinitialise le formulaire après un ajout
   */
  resetForm() {
    this.newProduct = {
      nom: '',
      description: '',
      prix: 0,
      categorie_nom: '',
    };
  }

  /**
   * Récupère tous les produits depuis Firestore
   */
  fetchProducts() {
    this.firestoreService.getDocuments('angproducts').subscribe({
      next: (data) => {
        this.products = data;
        console.log('Produits récupérés :', data);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des produits :', error);
      },
    });
  }

  /**
   * Supprime un produit depuis Firestore
   * @param id Identifiant du produit à supprimer
   */
  deleteProduct(id: string) {
    if (!id) return;

    this.firestoreService
      .deleteDocument('angproducts', id)
      .then(() => {
        console.log('Produit supprimé :', id);
        this.fetchProducts(); // Recharge la liste après suppression
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du produit :', error);
      });
  }
}
