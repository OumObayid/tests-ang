import { CommonModule } from '@angular/common';
import { Component, OnInit, viewChild, ElementRef } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../../../interfaces/categorie';

@Component({
  selector: 'app-resolver',
  imports: [CommonModule],
  template: `
    <div class="container ">
      <h1>Resolver</h1>
      <hr />
      <h3>Liste des categories</h3>
      <div *ngIf="categories.length > 0; else noCategories" class="row">
        <div
          *ngFor="let categorie of categories | slice: 0:4"
          class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4"
        >
          <div class="card d-flex flex-column mb-4 shadow">
            <div class="card-body d-flex flex-column">
             <h3 class="card-title text-truncate">{{ categorie.nom }}</h3>
            </div>
          </div>
        </div>
      </div>
      <ng-template #noCategories>
        <p>Aucune catégorie trouvée.</p>
      </ng-template>
      <h3>Liste des produits</h3>
      <div *ngIf="products.length > 0; else noProducts" class="row">
        <div
          *ngFor="let product of products | slice: 0:4"
          class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4"
        >
          <div class="card d-flex flex-column mb-4">
            <img
              [src]="product.image"
              [alt]="product.nom"
              class="card-img-top img-fluid"
              style="max-height: 150px; object-fit: cover;"
            />
            <div class="card-body d-flex flex-column">
              <h3 class="card-title text-truncate fw-bold">{{ product.nom }}</h3>
              <p class="card-text text-truncate" [title]="product.description">
                {{ product.description }}
              </p>
              <p class="card-text">
                <strong>Prix: </strong>{{ product.prix | currency }}
              </p>
              <p class="card-text">
                <strong>Catégorie: </strong>{{ product.categorie_nom }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ng-template #noProducts>
        <p>Aucune catégorie trouvée.</p>
      </ng-template>
      <!-- --------------------Template pour afficher le code source---------------- -->
    <!-- Nav Tabs -->
    <ul class="nav nav-tabs" id="codeTabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="c1-tab"
            data-bs-toggle="tab"
            data-bs-target="#c1"
            type="button"
            role="tab"
            aria-controls="c1"
            aria-selected="true"
          >
          Composant Parent
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="c2-tab"
            data-bs-toggle="tab"
            data-bs-target="#c2"
            type="button"
            role="tab"
            aria-controls="c2"
            aria-selected="true"
          >
          resolver
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="c3-tab"
            data-bs-toggle="tab"
            data-bs-target="#c3"
            type="button"
            role="tab"
            aria-controls="c3"
            aria-selected="true"
          >
          demarche à suivre
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content" id="codeTabsContent" style="position: relative;">
        <!-- Composant C1 -->
        <div
          class="tab-pane fade show active "
          id="c1"
          role="tabpanel"
          aria-labelledby="c1-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C1 -->
          <i (click)="copy1()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab1 class="tab fw-bold" ngNonBindable>
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component, OnInit, viewChild, ElementRef &#125; from '&#64;angular/core';
import &#123; Product &#125; from '../../interfaces/product';
import &#123; ActivatedRoute &#125; from '&#64;angular/router';

&#64;Component(&#123;
  selector: 'app-resolver',
  imports: [CommonModule],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;Resolver&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;h3&#62;Liste des produits&#60;/h3&#62;
      &#60;div *ngIf="products.length &#62; 0; else noProducts" class="row"&#62;
        &#60;div
          *ngFor="let product of products | slice: 0:4"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        &#62;
          &#60;div class="card d-flex flex-column mb-4"&#62;
            &#60;img
              [src]="product.image"
              [alt]="product.nom"
              class="card-img-top img-fluid"
              style="max-height: 150px; object-fit: cover;"
            /&#62;
            &#60;div class="card-body d-flex flex-column"&#62;
              &#60;h5 class="card-title text-truncate"&#62;&#123;&#123; product.nom &#125;&#125;&#60;/h5&#62;
              &#60;p class="card-text text-truncate" [title]="product.description"&#62;
                &#123;&#123; product.description &#125;&#125;
              &#60;/p&#62;
              &#60;p class="card-text"&#62;
                &#60;strong&#62;Prix: &#60;/strong&#62;&#123;&#123; product.prix | currency &#125;&#125;
              &#60;/p&#62;
              &#60;p class="card-text"&#62;
                &#60;strong&#62;Catégorie: &#60;/strong&#62;&#123;&#123; product.categorie_nom &#125;&#125;
              &#60;/p&#62;
            &#60;/div&#62;
          &#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;
      &#60;ng-template #noProducts&#62;
        &#60;p&#62;Aucune catégorie trouvée.&#60;/p&#62;
      &#60;/ng-template&#62;
    &#60;/div&#62;
  &#96;,
 styles: &#96; &#96;,
&#125;)
export class ResolverComponent implements OnInit &#123;

  constructor(private route: ActivatedRoute) &#123;&#125;
  products: Product[] = [];
  ngOnInit(): void &#123;
    // Récupère les données du resolver
    this.route.data.subscribe((data) =&#62; &#123;
      this.products = data['products'];
    &#125;);
  &#125;
&#125;</pre>
        </div>
        <!-- Composant C2 -->
        <div
          class="tab-pane fade show"
          id="c2"
          role="tabpanel"
          aria-labelledby="c2-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C2 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab1 class="tab fw-bold" ngNonBindable>
import &#123; map &#125; from 'rxjs/operators';
import &#123; ProductsService &#125; from './../services/http/products/products.service';
import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; Resolve &#125; from '&#64;angular/router';
import &#123; Observable &#125; from 'rxjs';
import &#123; Product &#125; from '../interfaces/product';

&#64;Injectable(&#123;
  providedIn: 'root',
&#125;)
export class ProductsResolver implements Resolve&#60;Product[]&#62; &#123;
  constructor(private productService: ProductsService) &#123;&#125;

  resolve(): Observable&#60;Product[]&#62; &#123;
    // Appelle le service pour récupérer les produits
    return this.productService.getProducts().pipe(
      map((response: any) => &#123;
        console.log('Response from API:', response); // Affiche la réponse brute pour débogage

        if (response.success && response.dataProd) &#123;
          console.log('Products extracted:', response.dataProd); // Affiche les produits extraits
          return response.dataProd; // Retourne les produits extraits
        &#125; else &#123;
          console.warn('No products found or API returned an error.');
          return []; // Retourne un tableau vide si la réponse n'est pas valide
        &#125;
      &#125;)
    );
  &#125;
&#125;</pre>
        </div>
        <!-- Composant C3 -->
        <div
          class="tab-pane fade show "
          id="c3"
          role="tabpanel"
          aria-labelledby="c3-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C3 -->
          <i (click)="copy3()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab3 class="tab fw-bold" ngNonBindable>
<strong>1. Générer le Resolver:</strong><span class="text-danger">ng generate resolver services/nom-du-resolver</span>
Cela crée un fichier TypeScript avec une classe implémentant Resolve.

<strong>2. Implémenter la logique de récupération des données dans le resolver:</strong>
(voir code du resolver)

<strong>3. Déclarer le Resolver dans le Routing Module :</strong> Ajouter le Resolver dans la configuration des routes:
<span class="text-danger">const routes: Routes = [
  &#123;
    path: 'chemin',
    component: NomComponent,
    resolve: &#123;
      nomData: NomResolver
    &#125;
  &#125;
];</span>

<strong>4. Récupérer les données dans le Composant :</strong> Utiliser ActivatedRoute pour accéder aux données résolues :
<span class="text-danger">this.route.data.subscribe(data => &#123;
  console.log(data.nomData);
&#125;);</span></pre>
        </div>
      </div>
<!-- --------------------Fin Template pour afficher le code source---------------- -->

      <span class=" mt-5">
        __________________________________<span class="fs-2">cours</span>
        __________________________________
      </span>
      <pre style="font-size:14px;">
Un resolver dans Angular est comme un assistant qui prépare les données
nécessaires avant que
vous n'arriviez sur une page.

<strong>1. Préparation des données :</strong> Il récupère les informations
nécessaires pour une route spécifique avant que la page
ne soit affichée.

<strong>2. Chargement anticipé :</strong> Au lieu d'attendre que le composant
soit chargé pour commencer à récupérer les données,
le resolver les obtient à l'avance.

<strong>3. Amélioration de l'expérience utilisateur :</strong> Cela permet
d'éviter d'afficher une page vide ou un indicateur de chargement,
car les données sont déjà prêtes lorsque la page s'affiche.

<strong>4. Gestion des erreurs :</strong> Si quelque chose ne va pas lors de
la récupération des données, le resolver peut rediriger l'utilisateur
 vers une page d'erreur avant même que la route ne soit activée.

 <strong>structure:</strong><span class="text-danger">
  app/
|- services/
|  |- user.service.ts
|  |- user.interface.ts
|  |- resolvers/
|     |- user-resolver.service.ts
|- app.component.ts
|- app.router.ts
|- app.config.ts
|- pages/
|  |- user-list.component.ts
 </span>
<strong>La fonction du resolver:</strong>
<span class="text-danger">import &#123; inject &#125; from '&#64;angular/core';
import &#123; ResolveFn &#125; from '&#64;angular/router';
import &#123; Observable &#125; from 'rxjs';
import &#123; Product &#125; from './product.interface';

export const userResolver: ResolveFn&#60;Product&#62; = (
  route,
  state
): Observable&#60;Product&#62; => &#123;
  const userService = inject(UserService);
  return userService.get(route.params['userId']);
&#125;;</span>

<strong>Ajouter le resolver à la route: </strong>
<span class="text-danger">const routes: Routes = [
  &#123;
    path: 'resolver',
    component: ResolverComponent,
    resolve: &#123;
    products: ProductsResolver, // Associe le resolver à cette route
    &#125;,
  &#125;
];</span>

<strong>Accéder aux données résolues dans le composant:</strong>
<span class="text-danger">this.route.data.subscribe((data) => &#123;
      this.products = data['products'];
    &#125;);</span>
      </pre>
    </div>
  `,

 styles: `
 // -------------------------style pour afficher le code source----------------
       .fa-check {
         color: grey;
       }

       i.fa-copy {
         cursor: pointer;
         color: grey;
         font-size: 20px;
         position: absolute;
         top: 20px;
         right: 20px;
         transition: color 0.5s ease, transform 0.3s ease;
         display: inline-block;
         padding: 10px;
       }

         i.fa-copy:hover{
           color:#aaacad;
         transform: scale(2.2); /* Effet d'agrandissement au survol */
         cursor: pointer; /* Change le curseur pour indiquer une action cliquable */
         }
         .confirm{
           position: absolute;
           top: 30px;
           right: 60px;
           color:grey;
             font-weight:bold;
         }
          .tab {
            background-color: #f8f9fa;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
            font-family: monospace;
          }
          .active {
         background-color:#eef06f !important; /* Couleur de l'onglet actif */
         border-color: grey; /* Couleur de la bordure pour l'onglet actif */
       }
          h3 {
            margin-top: 20px;
          }
 // -------------------------Fin style pour afficher le code source----------------
          `
})
export class ResolverComponent implements OnInit {
  products: Product[] = [];
  categories: Categorie[]= [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupère les données du resolver
    this.route.data.subscribe((data) => {
      this.products = data['products'];
      this.categories = data['categories'];

    });
  }
  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  infoTab3 = viewChild<ElementRef>('tab3');
  clicked: boolean = false;
  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy2() {
    const element = this.infoTab2()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }

  copy3() {
    const element = this.infoTab3()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
// ----------------------Fin ts pour afficher le code source--------------------


}
