import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  template: `
    <div class="sidebar" *ngIf="selectedMenu">
      <div class="accordion" id="menuAccordion">
        <div
          *ngFor="let item of menuItems[selectedMenu]; let i = index"
          class="accordion-item"
        >
          <h2 class="accordion-header" id="heading{{ i }}">
            <button
              class="accordion-button"
              [class.collapsed]="openedSubmenu !== item"
              type="button"
              (click)="toggleSubmenu(item)"
              data-bs-toggle="collapse"
              [attr.data-bs-target]="'#collapse' + i"
              aria-expanded="false"
              [attr.aria-controls]="'collapse' + i"
            >
              {{ item }}
            </button>
          </h2>
          <div
            [id]="'collapse' + i"
            class="accordion-collapse collapse"
            [class.show]="openedSubmenu === item"
            [attr.aria-labelledby]="'heading' + i"
            data-bs-parent="#menuAccordion"
          >
            <div class="accordion-body">
              <div class="list-group">
                <a
                  *ngFor="let sub of subMenus[selectedMenu][item]"
                  [routerLink]="['/', formatRoute(sub)]"
                  class="list-group-item list-group-item-action"
                >
                  {{ sub }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
.sidebar  {

  background-color: #f8f9fa;
  border-right: 1px solid #ddd;
}
.accordion-header{
  margin-bottom:0 ;
}
.accordion-button {
  background-color:#b39b18 !important;
  color: white !important;
  padding:5px;
  font-size:14px;
}
.accordion-button:hover{
  background-color:#d4b507 !important;
}

.accordion-button:not(.collapsed) {
  background-color:#d4b507 !important;
  border:none !important;
}
.accordion-button:focus,
.accordion-button:active {
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
}
.list-group-item {
  cursor: pointer;
  padding: 8px 4px;
}
.list-group-item:hover {
  background-color: #f1f1f1;
}
.accordion-body{
  padding: 0 !important;
}
  `,
})
export class SidebarComponent {
  @Input() selectedMenu!: string;
  openedSubmenu: string | null = null;

  menuItems: any = {
    Angular: [
      'data binding',
      'Les routes',
      'Les guards',
      'Les cycles de vie',
      'Services et Resolver',
      'Les classes',
      'Les styles',
      'Les pipes',
      'Control Flow',
      'Les signaux',
      'Input et Output',
      'ng-content',
      'ng-container - ng-template',
      'Viewchild',
      'Viewchildren',
      'ContentChild',
      'Les formulaires',
      'Ngrx',
      'Rxjs',
      'Angulaire et api rest',
    ],
    Laravel: ['Controllers', 'Models', 'Routes'],
    'React.js': ['Components', 'Hooks', 'State Management'],
    Déploiement: ['Deployement vers github', 'Deployement vers un hebergeur', 'Laravel'],
  };

  subMenus: any = {
    Angular: {
      'data binding': ['data binding'],
      'Les routes':['Les routes'],
      'Les guards':['C\'est quoi un guard','Exemple de connexion'],
      'Les cycles de vie':['NgOnInit','NgOnChanges','ngAfterViewInit','ngOnDestroy'],
      'Services et Resolver':['Les services', 'Les resolvers'],
      'Les classes': [
        'Liaison conditionnelle',
        'Liaison une chaîne de caractères',
        'Liaison avec un tableau',
        'Liaison avec un objet',
        'Combinaison des approches',
      ],
      'Les styles': [
        "Liaison d'une propriété",
        'Liaison avec unités',
        'Liaison multiple',
        'Liaison à un objet',
        'Approches en combinaison',
      ],
      'Les pipes': ['Les pipes'],
      'Control Flow': ['@if', '@for', '@switch'],
      'Les signaux': [
        'signal et computed',
        'signal et effect',
        'Les model',
        'Les signaux et leurs méthodes',
      ],
      'Input et Output': ['les inputs', 'les outputs'],
      'ng-content': ['projection avec ng-content'],
      'ng-container - ng-template': ['ng-container - ng-template'],
      'Viewchild': [
        'Accéder à un élément du DOM',
        'Accéder à un composant enfant',
        'ViewChild avec ng-template',
      ],
      'Viewchildren':['accéder à plusieurs éléments','Accéder aux composants enfants'],
      'ContentChild':['Accéder aux éléments enfants d\'un composant','Accéder à un composant enfant dans la projection de contenu'],
      'Les formulaires': [
        'ngForm dans ngSubmit',
        'Utiliser ViewChild pour ngForm',
        'FormGroup et FormControl',
      ],
      Ngrx: ['les states et les reducers'],
      Rxjs: [
        'Les observables',
        'Interval',
        'Ajax',
        'Http',
        'Les operateurs de création',
        'Les opérateurs de transformation',
      ],
      'Angulaire et api rest': [
        'Crud nodejs mongodb',
        'Crud firebase',
        'Crud json',
      ],
    },
    Laravel: {
      Controllers: ['Controller1', 'Controller2'],
      Models: ['Model1', 'Model2'],
      Routes: ['Route1', 'Route2'],
    },
    'React.js': {
      Components: ['ComponentA', 'ComponentB'],
      Hooks: ['Hook1', 'Hook2'],
      'State Management': ['Redux', 'Context API'],
    },
    Déploiement: {
      'Deployement vers github': ['Deployement vers github'],
      'Deployement vers un hebergeur': ['Angular avec api rest php', 'Laravel', 'React js']
    },
  };

  toggleSubmenu(item: string) {
    this.openedSubmenu = this.openedSubmenu === item ? null : item;
  }

  formatRoute(sub: string): string {
    return sub
      .toLowerCase()
      .normalize('NFD') // Décompose les caractères accentués
      .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
      .replace(/'/g, '-') // remplace les apostrophes par des tirets
      .replace(/\s+/g, '-'); // Remplace les espaces par des tirets
  }
}
