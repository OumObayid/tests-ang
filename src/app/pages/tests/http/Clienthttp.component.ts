import { CategoriesService } from '../../../services/http/apiphp/categories/categories.service';
import { ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { Categorie } from '../../../interfaces/categorie';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-3">
      <h1>Test de la requête Http</h1>
      <button class="btn btn-primary" (click)="fetchCategories()">
        Afficher tous les categories de l'api
      </button>
      @if (categories.length>0) {
      <ul class="mt-3">
        @for (category of categories; track $index) {
        <li>{{ category.nom }}</li>
        }
      </ul>
      } @if (hasError && isClicked){
      <div class="alert alert-danger ">
        Une erreur est survenue lors de la récupération des catégories.
      </div>
      } @if (categories.length === 0 && !hasError && isClicked){
      <div class="alert alert-danger ">Aucune catégorie</div>
      }
       <hr />

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
            aria-selected="false"
          >
          Sevice Categories
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
import &#123; CategoriesService &#125; from './../../../services/categories-http/categoriesHttp.service';
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component &#125; from '&#64;angular/core';
import &#123; Categorie &#125; from '../../../interfaces/categorie';

&#64;Component(&#123;
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule],
  providers: [CategoriesService], // Facultatif si fourni en &#96;root&#96;

  template: &#96;
    &#60;div class="container mt-3"&#62;
      &#60;h1&#62;Test de la requête Http&#60;/h1&#62;
      &#60;button class="btn btn-primary" (click)="fetchCategories()"&#62;
        Afficher tous les categories de l'api
      &#60;/button&#62;
      &#64;if (categories.length&#62;0) &#123;
      &#60;ul class="mt-3"&#62;
        &#64;for (category of categories; track $index) &#123;
        &#60;li&#62;&#123;&#123; category.nom &#125;&#125;&#60;/li&#62;
        &#125;
      &#60;/ul&#62;
      &#125; &#64;if (categories.length === 0 && hasError)&#123;
      &#60;div class="alert alert-danger "&#62;
        Une erreur est survenue lors de la récupération des catégories.
      &#60;/div&#62;
      &#125; &#64;if (categories.length === 0 && !hasError && isClicked)&#123;
      &#60;div class="alert alert-danger "&#62;Aucune catégorie&#60;/div&#62;
      &#125;
    &#60;/div&#62;
  &#96;,
&#125;)

export class ClienthttpComponent &#123;
  constructor(private CategoriesService: CategoriesService) &#123;&#125;
  categories: Categorie[] = [];
  hasError: boolean = false;
  isClicked: boolean = false;
  fetchCategories() &#123;
    this.hasError = false; // Réinitialisation de l'état d'erreur
   this.isClicked=true;
    //la difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
    // et au lieu de data dans la response on met response: response.data devient response.response
    this.CategoriesService.getCategories().subscribe(&#123;
      next: (response) =&#62; &#123;
        if (response?.success) &#123;
          this.categories = response.dataCat || []; // Vérifie que la clé existe
        &#125; else &#123;
          console.log(response.message);
        &#125;
      &#125;,
      error: (err) =&#62; &#123;
        console.error('Erreur :', err);
        this.hasError = true;
      &#125;,
    &#125;);
  &#125;
&#125;</pre>
        </div>

        <!-- Composant C2 -->
        <div
          class="tab-pane fade"
          id="c2"
          role="tabpanel"
          aria-labelledby="c2-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C2 -->
          <i (click)="copy2()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i
          ></span>
          <pre #tab2 class="tab fw-bold" ngNonBindable>
import &#123; HttpClient &#125; from '&#64;angular/common/http';
import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; environment &#125; from '../../../environments/environment';
import &#123; Observable &#125; from 'rxjs';

&#64;Injectable(&#123;
  providedIn: 'root'
&#125;)
export class CategoriesService &#123;

  constructor(private http: HttpClient) &#123; &#125;
  // ou
  // private http = inject(HttpClient);
    private baseURL: string = environment.apiURL;
  //fetch all categories
    getCategories(): Observable&#60;any&#62; &#123;
        try &#123;
          // Appel à l'API pour récupérer les produits
          const response =  this.http.get&#60;any&#62;(&#96;$&#123;this.baseURL&#125;/categories/getCategories.php&#96;)
          // console.log('response service getCategories:', response);
          return response;
        &#125; catch (error) &#123;
          // Gestion des erreurs : affiche un message dans la console
          console.error('Erreur lors de la récupération des categories', error);

          // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
          throw error;
        &#125;
      &#125;
&#125;</pre>
        </div>
      </div>
<!-- --------------------Fin Template pour afficher le code source---------------- -->
      <!-- --------------------Template pour afficher le cours---------------- -->
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
<pre>
<strong>1. Avant utilisation:</strong>  il faut le configurer dans app.config.ts:

import &#123; provideHttpClient, withFetch &#125; from '&#64;angular/common/http';
export const appConfig: ApplicationConfig = &#123;
  providers: [
    <span class="text-danger">provideHttpClient(withFetch()),</span>
    ....,
    ]

<strong>2. Utilisation:</strong>
<div style="background-color:#f8f9fa;padding:0 15px;border: 1px solid #ddd;">
import &#123; Injectable, inject, signal &#125; from '&#64;angular/core';
import &#123; HttpClient &#125; from '&#64;angular/common/http';
import &#123; Observable, tap &#125; from 'rxjs';
import &#123; User &#125; from './user.interface';

&#64;Injectable(&#123;
  providedIn: 'root',
&#125;)
export class UserService &#123;
  private http = inject(HttpClient);
  private users = signal&#60;User[]&#62;([]);
  readonly url = 'https://jsonplaceholder.typicode.com/users';

  // GET - Récupérer tous les utilisateurs
  getUsers(): Observable&#60;User[]&#62; &#123;
    return this.http.get&#60;User[]&#62;(this.url).pipe(
      tap(users =&#62; this.users.set(users))
    );
  &#125;

  // GET - Récupérer un utilisateur par son ID
  getUser(id: number): Observable&#60;User&#62; &#123;
    return this.http.get&#60;User&#62;(&#96;$&#123;this.url&#125;/$&#123;id&#125;&#96;);
  &#125;

  // POST - Créer un nouvel utilisateur
  createUser(user: Omit&#60;User, 'id'&#62;): Observable&#60;User&#62; &#123;
    return this.http.post&#60;User&#62;(this.url, user);
  &#125;

  // PUT - Mettre à jour un utilisateur
  updateUser(user: User): Observable&#60;User&#62; &#123;
    return this.http.put&#60;User&#62;(&#96;$&#123;this.url&#125;/$&#123;user.id&#125;&#96;, user);
  &#125;

  // PATCH - Mettre à jour partiellement un utilisateur
  patchUser(id: number, changes: Partial&#60;User&#62;): Observable&#60;User&#62; &#123;
    return this.http.patch&#60;User&#62;(&#96;$&#123;this.url&#125;/$&#123;id&#125;&#96;, changes);
  &#125;

  // DELETE - Supprimer un utilisateur
  deleteUser(id: number): Observable&#60;void&#62; &#123;
    return this.http.delete&#60;void&#62;(&#96;$&#123;this.url&#125;/$&#123;id&#125;&#96;);
  &#125;
&#125;
</div>
</pre>
      <!-- --------------------Template pour afficher le cours---------------- -->
    </div>
  `,
  // -------------------------style pour afficher le code source----------------
  styles: `
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
     transform: scale(1.2); /* Effet d'agrandissement au survol */
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
        background-color:#f8f9fa;
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
      `,
  // -------------------------style pour afficher le code source----------------
})
export class ClienthttpComponent {
  constructor(private CategoriesService: CategoriesService) {}

  categories: Categorie[] = [];
  hasError: boolean = false;
  isClicked: boolean = false;
  fetchCategories() {
    this.hasError = false; // Réinitialisation de l'état d'erreur

    //la difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
    // et au lieu de data dans la response on met response: response.data devient response.response
    const retour = this.CategoriesService.getCategories()
    retour.subscribe({
      next: (response) => {
        if (response?.success) {
          this.categories = response.dataCat || []; // Vérifie que la clé existe
        } else {
          console.log(response.message);
        }
      },
      error: (err) => {
        console.error('Erreur :', err);
        this.hasError = true;
      },
    });
    setTimeout(() => {
      this.isClicked = true;
    }, 1000);
  }

  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
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
// ----------------------Fin ts pour afficher le code source--------------------
}
