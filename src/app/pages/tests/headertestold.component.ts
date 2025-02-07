import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Component, effect, OnInit, signal } from '@angular/core';
import { removeActiveUser, selectIsLoggedIn } from '../../ngrx/data.slice';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule],
  selector: 'app-headertestold',
  template: `
    <nav
      style="background-color: black;"
      class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3 p-2"
    >
      <a [ngClass]="{ active: router.url === '/' }" routerLink="/">home</a>
      <a
        *ngIf="!isloggedIn()"
        [ngClass]="{ active: router.url === '/exemple-de-connexion' }"
        routerLink="/exemple-de-connexion"
        >se connecter
      </a>
      <span
        *ngIf="isloggedIn()"
        class="logout"
        style="cursor: pointer;"
        (click)="lougout()"
        >se deconnecter
      </span>
      <a
        *ngIf="isloggedIn()"
        [ngClass]="{ active: router.url === '/dashboard' }"
        routerLink="/dashboard"
        >dashboard</a
      >
      <a [ngClass]="{ active: router.url === '/c-est-quoi-un-guard' }" routerLink="/c-est-quoi-un-guard"
        >guard</a
      >
      <a
        [ngClass]="{ active: router.url === '/resolver' }"
        routerLink="/resolver"
        >resolver</a
      >
      <a [ngClass]="{ active: router.url === '/data-binding' }" routerLink="/data-binding"
        >binding</a
      >
      <a [ngClass]="{ active: router.url === '/interval' }" routerLink="/interval"
        >interval</a
      >
      <a [ngClass]="{ active: router.url === '/ajax' }" routerLink="/ajax"
        >ajax</a
      >
      <a [ngClass]="{ active: router.url === '/http' }" routerLink="/http"
        >http</a
      >
      <a [ngClass]="{ active: router.url === '/signal-et-computed' }" routerLink="/signal-et-computed"
        >signal & computed</a
      >
      <a [ngClass]="{ active: router.url === '/signal-et-effect' }" routerLink="/signal-et-effect"
        >signal & effect</a
      >
      <a [ngClass]="{ active: router.url === '/les-inputs' }" routerLink="/les-inputs"
        >Input</a
      >
      <a [ngClass]="{ active: router.url === '/les-outputs' }" routerLink="/les-outputs"
        >Output</a
      >
      <a [ngClass]="{ active: router.url === '/les-model' }" routerLink="/les-model"
        >model</a
      >
      <a [ngClass]="{ active: router.url === '/les-signaux-et-leurs-methodes' }" routerLink="/les-signaux-et-leurs-methodes"
        >signal methodes</a
      >
      <a [ngClass]="{ active: router.url === '/liaison-conditionnelle' }" routerLink="/liaison-conditionnelle"
        >Class Bindings 1</a
      >
      <a [ngClass]="{ active: router.url === '/liaison-une-chaine-de-caracteres' }" routerLink="/liaison-une-chaine-de-caracteres"
        >Class Bindings 2</a
      >
      <a [ngClass]="{ active: router.url === '/liaison-avec-un-tableau' }" routerLink="/liaison-avec-un-tableau"
        >Class Bindings 3</a
      >
      <a [ngClass]="{ active: router.url === '/liaison-avec-un-objet' }" routerLink="/liaison-avec-un-objet"
        >Class Bindings 4</a
      >
      <a [ngClass]="{ active: router.url === '/combinaison-des-approches' }" routerLink="/combinaison-des-approches"
        >Class Bindings 5</a
      >
      <a [ngClass]="{ active: router.url === '/liaison-d-une-propriete' }" routerLink="/liaison-d-une-propriete"
        >Style Bindings 1</a
      >
      <a [ngClass]="{ active: router.url === '/liaison-avec-unites' }" routerLink="/liaison-avec-unites"
        >Style Bindings 2</a
      >
      <a [ngClass]="{ active: router.url === '/liaison-multiple' }" routerLink="/liaison-multiple"
        >Style Bindings 3</a
      >
      <a [ngClass]="{ active: router.url === '/liaison-a-un-objet' }" routerLink="/liaison-a-un-objet"
        >Style Bindings 4</a
      >
      <a [ngClass]="{ active: router.url === '/approches-en-combinaison' }" routerLink="/approches-en-combinaison"
        >Style Bindings 5</a
      >
      <a [ngClass]="{ active: router.url === '/test20' }" routerLink="/test20"
        >cycles de vie</a
      >
      <a [ngClass]="{ active: router.url === '/les-pipes' }" routerLink="/les-pipes"
        >Les pipes</a
      >
      <a [ngClass]="{ active: router.url === '/@if' }" routerLink="/@if"
        >&#64;for</a
      >
      <a [ngClass]="{ active: router.url === '/@for' }" routerLink="/@for"
        >&#64;if</a
      >
      <a [ngClass]="{ active: router.url === '/@switch' }" routerLink="/@switch"
        >&#64;switch</a
      >
      <a [ngClass]="{ active: router.url === '/projection-avec-ng-content' }" routerLink="/projection-avec-ng-content"
        >ng-content</a
      >
      <a
        [ngClass]="{ active: router.url === '/ng-container---ng-template' }"
        routerLink="/ng-container---ng-template"
        >ng-container-template</a
      >
      <a [ngClass]="{ active: router.url === '/acceder-a-un-element-du-dom' }" routerLink="/acceder-a-un-element-du-dom"
        >viewChild 1</a
      >
      <a [ngClass]="{ active: router.url === '/acceder-a-un-composant-enfant' }" routerLink="/acceder-a-un-composant-enfant"
        >viewChild 2</a
      >
      <a
        [ngClass]="{ active: router.url === '/viewchild-avec-ng-template' }"
        routerLink="/viewchild-avec-ng-template"
        >viewChild 3</a
      >
      <a [ngClass]="{ active: router.url === '/acceder-a-plusieurs-elements' }" routerLink="/acceder-a-plusieurs-elements"
        >viewChildren 1</a
      >
      <a [ngClass]="{ active: router.url === '/acceder-aux-composants-enfants' }" routerLink="/acceder-aux-composants-enfants"
        >viewChildren 2</a
      >
      <a [ngClass]="{ active: router.url === '/acceder-aux-elements-enfants-d-un-composant' }" routerLink="/acceder-aux-elements-enfants-d-un-composant"
        >contentChild 1</a
      >
      <a [ngClass]="{ active: router.url === '/acceder-a-un-composant-enfant-dans-la-projection-de-contenu' }" routerLink="/acceder-a-un-composant-enfant-dans-la-projection-de-contenu"
        >contentChild 2</a
      >
      <a [ngClass]="{ active: router.url === '/les-states-et-les-reducers' }" routerLink="/les-states-et-les-reducers"
        >ngrx</a
      >
      <a [ngClass]="{ active: router.url === '/ngform-dans-ngsubmit' }" routerLink="/ngform-dans-ngsubmit"
        >ngform1</a
      >
      <a [ngClass]="{ active: router.url === '/utiliser-viewchild-pour-ngform' }" routerLink="/utiliser-viewchild-pour-ngform"
        >ngform2</a
      >
      <a
        [ngClass]="{ active: router.url === '/formgroup-et-formcontrol' }"
        routerLink="/formgroup-et-formcontrol"
        >form-control-group</a
      >
      <a
        [ngClass]="{ active: router.url === '/crud-nodejs-mongodb' }"
        routerLink="/crud-nodejs-mongodb"
        >crud-nodejs-mongodb</a
      >
      <a
        [ngClass]="{ active: router.url === '/crud-firebase' }"
        routerLink="/crud-firebase"
        >crud-firebase</a
      >
      <a
        [ngClass]="{ active: router.url === '/crud-json' }"
        routerLink="/crud-json"
        >crud-json</a
      >
      <a [ngClass]="{ active: router.url === '/les-observables' }" routerLink="/les-observables"
        >rxjs Observable</a
      >
      <a [ngClass]="{ active: router.url === '/les-operateurs-de-creation' }" routerLink="/les-operateurs-de-creation"
        >rxjs Creation</a
      >
      <a [ngClass]="{ active: router.url === '/les-operateurs-de-transformation' }" routerLink="/les-operateurs-de-transformation"
        >rxjs Transformation</a
      >
      <a [ngClass]="{ active: router.url === '/fullstack-avec-angulaire-et-api-php' }" routerLink="/fullstack-avec-angulaire-et-api-php"
        >Hebergement ang-php</a
      >
    </nav>
  `,
  styles: [
    `
      a,
      .logout {
        text-decoration: none; /* Supprime le soulignement */
        background-color: #3498db; /* Couleur de fond par défaut */
        color: white; /* Couleur du texte */
        padding: 5px; /* Espacement interne pour un aspect bouton */
        border-radius: 5px; /* Coins arrondis */
        display: inline-block; /* S'assure que les liens respectent le padding */
        transition: background-color 0.3s ease; /* Transition fluide sur le survol */
      }

      a:hover,
      .logout:hover {
        background-color: #2ecc71; /* Couleur de fond au survol */
      }

      .active {
        color: rgb(40, 54, 45) !important; /* Couleur du texte actif */
        font-weight: 600 !important;
        background-color:rgb(155, 240, 191)
      }
    `,
  ],
})
export class HeadertestOldComponent implements OnInit {
  // constructor(public router: Router, private store: Store) {}
  isloggedIn = signal(false);
  constructor(
    public router: Router, private store: Store

  ) {
    // Déclaration d'un effet qui observe les changements du signal `count`
    effect((
    ) => {
      this.store
      .select(selectIsLoggedIn)
      .subscribe((islog) => this.isloggedIn.set(islog));
    });
  }
  ngOnInit() {
    this.store
      .select(selectIsLoggedIn)
      .subscribe((islog) => this.isloggedIn.set(islog));
  }
  lougout() {
    this.isloggedIn.set(false);
    this.store.dispatch(removeActiveUser());
    this.router.navigate(['/login']);
  }
}
