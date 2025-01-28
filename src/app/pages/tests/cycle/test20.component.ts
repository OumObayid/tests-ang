import { ElementRef } from '@angular/core';
// ngOnChanges est une méthode de cycle de vie dans les composants Angular qui est appelée chaque fois que des modifications sont apportées aux propriétés de l'objet d'entrée du composant, qui sont déclarées dans l'annotation @Input(). Cette méthode prend en paramètre un objet de type SimpleChanges, qui contient les propriétés avant et après leur modification.

import { Enfant20Component } from './enfant20.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-test20',
  imports: [FormsModule, CommonModule, Enfant20Component],
  template: `
    <div class="container">
      <h1><strong>Les cycles de vie:</strong> ngOnChanges</h1>
      <hr />
      <div class="border p-3">
        <h3 class="fw-bolder">Parent Component</h3>
        <input
          type="text"
          [(ngModel)]="parentMessage"
          placeholder="Type a message"
          class="form-control mb-3 text-danger"
        />
      </div>
      <app-enfant20 [message]="parentMessage"></app-enfant20>
      <hr>
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
          Composant Enfant
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
import &#123; EnfantComponent &#125; from "./enfant.component";
import &#123; CommonModule &#125; from "&#64;angular/common";
import &#123; FormsModule &#125; from "&#64;angular/forms";
import &#123; Component &#125; from "&#64;angular/core";

&#64;Component(&#123;
  selector: "app-root",
  imports: [FormsModule, CommonModule, EnfantComponent],
  template: &#96;
    &#60;div class="container"&#62;
      &#60;h1&#62;&#60;strong&#62;Les cycles de vie:&#60;/strong&#62; ngOnChanges&#60;/h1&#62;
      &#60;hr /&#62;
      &#60;div class="border p-3"&#62;
        &#60;h3 class="fw-bolder"&#62;Parent Component&#60;/h3&#62;
        &#60;input
          type="text"
          [(ngModel)]="parentMessage"
          placeholder="Type a message"
          class="form-control mb-3 text-danger"
        /&#62;
      &#60;/div&#62;
      &#60;app-enfant [message]="parentMessage"&#62;&#60;/app-enfant&#62;
    &#60;/div&#62;
  &#96;,
  styles: [&#96;&#96;],
&#125;)
export class AppComponent &#123;
  parentMessage = "Hello from Parent!";
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
import &#123; CommonModule &#125; from '&#64;angular/common';
import &#123; Component, Input, OnChanges, SimpleChanges &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-enfant',
  imports: [CommonModule],
  template: &#96;
    &#60;div class="border p-3 mt-3"&#62;
      &#60;h3 class="fw-bolder"&#62;Child Component&#60;/h3&#62;
      &#60;p&#62;
        Message from Parent: &#60;span class="text-danger"&#62;&#123;&#123; message &#125;&#125;&#60;/span&#62;
      &#60;/p&#62;
      &#60;p&#62;&#60;strong&#62;Change Log:&#60;/strong&#62;&#60;/p&#62;
      &#60;ul&#62;
        &#60;li *ngFor="let log of changeLog"&#62;&#123;&#123; log &#125;&#125;&#60;/li&#62;
      &#60;/ul&#62;
    &#60;/div&#62;
  &#96;,
  styles: [&#96;&#96;],
&#125;)
export class EnfantComponent implements OnChanges &#123;
  &#64;Input() message: string = ''; // Valeur envoyée par le parent
  changeLog: string[] = []; // Stocke les changements

  // Détecte les changements et agit dessus
  ngOnChanges(changes: SimpleChanges) &#123;
    if (changes['message']) &#123;
      console.log(
        'La valeur a changé de',
        changes['message'].previousValue,
        'à',
        changes['message'].currentValue
      );
    &#125;
    if (changes['message']) &#123;
      const previous = changes['message'].previousValue;
      const current = changes['message'].currentValue;
      this.changeLog.push(&#96;Message changed from '$&#123;previous&#125;' to '$&#123;current&#125;'&#96;);
    &#125;
  &#125;
&#125;


          </pre>

        </div>
      </div>

      <hr>
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
ngOnChanges est une méthode de cycle de vie dans les composants Angular qui est appelée chaque fois que des modifications sont apportées
aux propriétés de l'objet d'entrée du composant, qui sont déclarées dans l'annotation &#64;Input(). Cette méthode prend en paramètre
un objet de type SimpleChanges, qui contient les propriétés avant et après leur modification.

Explications détaillées :
1. ngOnChanges(changes: SimpleChanges)
Cette méthode est une lifecycle hook d'Angular qui est automatiquement appelée lorsque l'une des propriétés marquées avec &#64;Input()
dans le composant subit une modification.
Elle reçoit un paramètre changes de type SimpleChanges, qui est un objet contenant des informations sur toutes les propriétés modifiées.
2. if (changes['message'])
Vérifie si la propriété message a été modifiée parmi les &#64;Input() de ce composant.
changes['message'] contient les détails spécifiques des changements pour la propriété message.
3. const previous = changes['message'].previousValue;
Accède à la valeur précédente de la propriété message avant le changement.
Si c'est la première fois que message est défini (pas de valeur précédente), previousValue sera undefined.
4. const current = changes['message'].currentValue;
Accède à la nouvelle valeur actuelle de la propriété message après le changement.
5. this.changeLog.push(...)
Ajoute une entrée dans un tableau nommé changeLog pour enregistrer les modifications de la propriété message.
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

             `,
})
export class Test20Component {
  parentMessage = 'Hello from Parent!';
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
