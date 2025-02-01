import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Component, effect, OnInit, signal } from '@angular/core';
import { removeActiveUser, selectIsLoggedIn } from '../../ngrx/data.slice';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule],
  selector: 'app-headertest',
  template: `
    <nav
      style="background-color: black;"
      class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3 p-2"
    >
      <a [ngClass]="{ active: router.url === '/' }" routerLink="/">home</a>
      <a
        *ngIf="!isloggedIn()"
        [ngClass]="{ active: router.url === '/login' }"
        routerLink="/login"
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
      <a [ngClass]="{ active: router.url === '/guard' }" routerLink="/guard"
        >guard</a
      >
      <a
        [ngClass]="{ active: router.url === '/resolver' }"
        routerLink="/resolver"
        >resolver</a
      >
      <a [ngClass]="{ active: router.url === '/test1' }" routerLink="/test1"
        >binding</a
      >
      <a [ngClass]="{ active: router.url === '/test2' }" routerLink="/test2"
        >interval</a
      >
      <a [ngClass]="{ active: router.url === '/test3' }" routerLink="/test3"
        >ajax</a
      >
      <a [ngClass]="{ active: router.url === '/http' }" routerLink="/http"
        >http</a
      >
      <a [ngClass]="{ active: router.url === '/test4' }" routerLink="/test4"
        >signal & computed</a
      >
      <a [ngClass]="{ active: router.url === '/test5' }" routerLink="/test5"
        >signal & effect</a
      >
      <a [ngClass]="{ active: router.url === '/test6' }" routerLink="/test6"
        >Input</a
      >
      <a [ngClass]="{ active: router.url === '/test7' }" routerLink="/test7"
        >Output</a
      >
      <a [ngClass]="{ active: router.url === '/test8' }" routerLink="/test8"
        >model</a
      >
      <a [ngClass]="{ active: router.url === '/test9' }" routerLink="/test9"
        >signal methodes</a
      >
      <a [ngClass]="{ active: router.url === '/test10' }" routerLink="/test10"
        >Class Bindings 1</a
      >
      <a [ngClass]="{ active: router.url === '/test11' }" routerLink="/test11"
        >Class Bindings 2</a
      >
      <a [ngClass]="{ active: router.url === '/test12' }" routerLink="/test12"
        >Class Bindings 3</a
      >
      <a [ngClass]="{ active: router.url === '/test13' }" routerLink="/test13"
        >Class Bindings 4</a
      >
      <a [ngClass]="{ active: router.url === '/test14' }" routerLink="/test14"
        >Class Bindings 5</a
      >
      <a [ngClass]="{ active: router.url === '/test15' }" routerLink="/test15"
        >Style Bindings 1</a
      >
      <a [ngClass]="{ active: router.url === '/test16' }" routerLink="/test16"
        >Style Bindings 2</a
      >
      <a [ngClass]="{ active: router.url === '/test17' }" routerLink="/test17"
        >Style Bindings 3</a
      >
      <a [ngClass]="{ active: router.url === '/test18' }" routerLink="/test18"
        >Style Bindings 4</a
      >
      <a [ngClass]="{ active: router.url === '/test19' }" routerLink="/test19"
        >Style Bindings 5</a
      >
      <a [ngClass]="{ active: router.url === '/test20' }" routerLink="/test20"
        >cycles de vie</a
      >
      <a [ngClass]="{ active: router.url === '/test21' }" routerLink="/test21"
        >Les pipes</a
      >
      <a [ngClass]="{ active: router.url === '/test22' }" routerLink="/test22"
        >&#64;for</a
      >
      <a [ngClass]="{ active: router.url === '/test23' }" routerLink="/test23"
        >&#64;if</a
      >
      <a [ngClass]="{ active: router.url === '/test24' }" routerLink="/test24"
        >&#64;switch</a
      >
      <a [ngClass]="{ active: router.url === '/test25' }" routerLink="/test25"
        >ng-content</a
      >
      <a
        [ngClass]="{ active: router.url === '/ng-container-template' }"
        routerLink="/ng-container-template"
        >ng-container-template</a
      >
      <a [ngClass]="{ active: router.url === '/test26' }" routerLink="/test26"
        >viewChild 1</a
      >
      <a [ngClass]="{ active: router.url === '/test27' }" routerLink="/test27"
        >viewChild 2</a
      >
      <a
        [ngClass]="{ active: router.url === '/viewChild3' }"
        routerLink="/viewChild3"
        >viewChild 3</a
      >
      <a [ngClass]="{ active: router.url === '/test28' }" routerLink="/test28"
        >viewChildren 1</a
      >
      <a [ngClass]="{ active: router.url === '/test29' }" routerLink="/test29"
        >viewChildren 2</a
      >
      <a [ngClass]="{ active: router.url === '/test30' }" routerLink="/test30"
        >contentChild 1</a
      >
      <a [ngClass]="{ active: router.url === '/test31' }" routerLink="/test31"
        >contentChild 2</a
      >
      <a [ngClass]="{ active: router.url === '/ngrx' }" routerLink="/ngrx"
        >ngrx</a
      >
      <a [ngClass]="{ active: router.url === '/ngform1' }" routerLink="/ngform1"
        >ngform1</a
      >
      <a [ngClass]="{ active: router.url === '/ngform2' }" routerLink="/ngform2"
        >ngform2</a
      >
      <a
        [ngClass]="{ active: router.url === '/form-control-group' }"
        routerLink="/form-control-group"
        >form-control-group</a
      >
      <a
        [ngClass]="{ active: router.url === '/products-node' }"
        routerLink="/products-node"
        >crud-nodejs-mongodb</a
      >
      <a
        [ngClass]="{ active: router.url === '/products-firebase' }"
        routerLink="/products-firebase"
        >crud-firebase</a
      >
      <a
        [ngClass]="{ active: router.url === '/products-json' }"
        routerLink="/products-json"
        >crud-json</a
      >
      <a [ngClass]="{ active: router.url === '/rxjs-observable' }" routerLink="/rxjs-observable"
        >rxjs Observable</a
      >
      <a [ngClass]="{ active: router.url === '/rxjs-creation' }" routerLink="/rxjs-creation"
        >rxjs Creation</a
      >
      <a [ngClass]="{ active: router.url === '/rxjs-transformation' }" routerLink="/rxjs-transformation"
        >rxjs Transformation</a
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
export class HeadertestComponent implements OnInit {
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
