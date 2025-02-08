import { ElementRef } from '@angular/core';
// utilisation de ajax
import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-test3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-3">
      <h1>Test de la requête AJAX</h1>
      <button class="btn btn-success" (click)="fetchCategories()">
        Afficher tous les categories de l'api
      </button>
      @if (categories.length>0) {
      <ul class="mt-3">
        @for (category of categories; track $index) {
        <li>{{ category.nom }}</li>
        }
      </ul>
      }
      @if (categories.length === 0 && hasError){
      <div class="alert alert-danger ">
        Une erreur est survenue lors de la récupération des catégories.
      </div>
      }
      <!-- <ul class="mt-3" *ngIf="categories.length > 0">
        <li *ngFor="let category of categories">{{ category.nom }}</li>
      </ul> -->

      <!-- <div
        *ngIf="categories.length === 0 && hasError"
        class="alert alert-danger "
      >
        Une erreur est survenue lors de la récupération des catégories.
      </div> -->
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
            Composant appComponent
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content " id="codeTabsContent">
        <!-- Composant C1 -->
        <div
          class="tab-pane fade show active"
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
import &#123; Component &#125; from '&#64;angular/core';
import &#123; ajax &#125; from 'rxjs/ajax';
import &#123; environment &#125; from '../../../../environments/environment';

&#64;Component(&#123;
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: &#96;
    &#60;div class="container mt-3"&#62;
      &#60;h1&#62;Test de la requête AJAX&#60;/h1&#62;
      &#60;button class="btn btn-success" (click)="fetchCategories()"&#62;
        Afficher tous les categories de l'api
      &#60;/button&#62;

      &#60;ul class="mt-3" *ngIf="categories.length &#62; 0"&#62;
        &#60;li *ngFor="let category of categories"&#62;&#123;&#123; category.nom &#125;&#125;&#60;/li&#62;
      &#60;/ul&#62;

      &#60;div
        *ngIf="categories.length === 0 && hasError"
        class="alert alert-danger "
      &#62;
        Une erreur est survenue lors de la récupération des catégories.
      &#60;/div&#62;
&#60;/div&#62;
&#96;,
&#125;)
export class AppComponent &#123;
  private baseURL: string = environment.apiURL;
  categories: any[] = [];
  hasError: boolean = false;

  fetchCategories(): void &#123;
    this.hasError = false; // Réinitialisation de l'état d'erreur

    //la difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
    // et au lieu de data dans la response on met response: response.data devient response.response

    ajax(&#123;
      url: this.baseURL + '/categories/getCategories.php',
      method: 'GET',
    &#125;).subscribe(&#123;
      next: (response: any) =&#62; &#123;
        console.log('response :', response.response);
        if (response.response.success) &#123;
          this.categories = response.response.dataCat || []; // Assurez-vous que la clé existe
          console.log('this.categories :', this.categories);
        &#125; else console.log(response.response.message);
      &#125;,
      error: () =&#62; &#123;
        this.hasError = true;
      &#125;,
    &#125;);
  &#125;
&#125;
        </pre
          >
        </div>
      </div>
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
      <!-- --------------------Template pour afficher le cours---------------- -->
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <div>
        <p>
          AJAX a été principalement conçu pour mettre à jour des parties d'une
          page Web, sans recharger la page entière.
        </p>
        <p>
          La difference avec axios est qu'il faut ajouter X-Requested-With dans
          l'api:header('Access-Control-Allow-Headers:
          Content-Type,X-Requested-With'); et au lieu de data dans la response
          on met response: response.data devient response.response
        </p>
        <strong>syntaxe:</strong>
        <pre>
ajax(&#123;
  url: "........",
  method: "GET",
&#125;).subscribe(&#123;
  next: (response: any) => &#123;
   //utilisation de la reponse de l'api
  &#125;,
  error: () => &#123;
    this.hasError = true;
  &#125;,
&#125;);
</pre>

      </div>
      <!-- --------------------Template pour afficher le cours---------------- -->
    </div>
  `,
  // -------------------------style pour afficher le code source----------------
  styles: `
   pre{
          font-size:15px;
         }
.fa-check  {
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
export class Test3Component {
  private baseURL: string = environment.apiURL;
  categories: any[] = [];
  hasError: boolean = false;

  fetchCategories(): void {
    this.hasError = false; // Réinitialisation de l'état d'erreur

    //la difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
    // et au lieu de data dans la response on met response: response.data devient response.response

    const response= ajax({
      // url: this.baseURL + '/categories/getCategories.php',
      url: `${this.baseURL}/categories/getCategories.php`,
      method: 'GET',
    })


    response.subscribe({
      next: (response: any) => {
      console.log('response :', response.response);
      if (response.response.success) {
        this.categories = response.response.dataCat || []; // Assurez-vous que la clé existe
        console.log('this.categories :', this.categories);
      } else {
        console.log(response.response.message);
      }
      },
      error: () => {
      this.hasError = true;
      },
    });
  }

  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  clicked: boolean = false;

  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ------------------Fin ts pour afficher le code source-------------------
}
