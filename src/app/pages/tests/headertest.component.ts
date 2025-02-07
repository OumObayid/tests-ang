import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-headertest',
  imports: [CommonModule,RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a [ngClass]="{ active: router.url === '/' }" routerLink="/" class="nav-link">Home</a>
        </li>
        <li class="nav-item" *ngFor="let menu of mainMenus">
          <a
            class="nav-link"
            [class.active]="menu === activeMenu"
            (click)="selectMenu(menu)"
          >
            {{ menu }}
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: `
  .nav-link {
    cursor: pointer;
  }
  .nav-link.active {
    color: #cbae0b !important;
  }
  `,
})
export class HeadertestComponent {
  constructor(public router: Router, private route: ActivatedRoute) {}

  @Output() menuSelected = new EventEmitter<string>();
  mainMenus = ['Angular', 'Laravel', 'React.js', 'Déploiement'];
  activeMenu: string = 'Angular'; // Angular actif par défaut


  ngOnInit() {
    this.detectActiveMenu();
  }

  selectMenu(menu: string) {
    this.activeMenu = menu;
    this.menuSelected.emit(menu);
    this.router.navigate([this.normalizeUrl(menu)]);
  }

  detectActiveMenu() {
    this.route.url.subscribe(() => {
      let currentUrl = this.router.url.split('/')[1]; // Récupère la première partie de l'URL

      if (!currentUrl) {
        // Si l'URL est vide (page d'accueil), rediriger vers Angular
        this.router.navigate(['/']);
        this.activeMenu = 'Angular';
        return;
      }

      const matchedMenu = this.mainMenus.find(
        (menu) => this.normalizeUrl(menu) === currentUrl
      );

      if (matchedMenu) {
        this.activeMenu = matchedMenu;
      }
    });
  }

  normalizeUrl(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD') // Supprime les accents
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-') // Remplace les espaces par des tirets
      .replace(/'/g, '-'); // Remplace les apostrophes par des tirets
  }
}
