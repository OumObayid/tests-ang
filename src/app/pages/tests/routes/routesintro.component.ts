import { Component } from '@angular/core';

@Component({
  selector: 'app-routes-intro',
  imports: [],
  template: `
    <div>
      <h1>Introduction au Routing Angular</h1>
      <hr>
      <p>
        Le routing permet de naviguer entre différentes pages sans recharger
        l'application. Angular utilise RouterModule pour gérer cette navigation.
      </p>
      <h2>Exemple d’une application avec le routing</h2>
      <h3>Définition des routes (app.routes.ts) :</h3>
      <pre class="tab">
// Importation du module Routes d'Angular pour définir les routes
import &#123; Routes &#125; from '&#64;angular/router';

// Importation des composants qui seront affichés selon l'URL
import &#123; HomeComponent &#125; from './home.component';
import &#123; AboutComponent &#125; from './about.component';

// Définition des routes de l'application
export const routes: Routes = [
  &#123;
    path: '', // Chemin vide correspondant à la page d'accueil
    component: HomeComponent // Affiche le composant HomeComponent
  &#125;,
  &#123;
    path: 'about', // URL /about affichera la page "À propos"
    component: AboutComponent // Affiche le composant AboutComponent
  &#125;
];
</pre>
      <h3>Ajout du router dans app.config.ts :</h3>
      <pre class="tab">
import &#123; ApplicationConfig &#125; from '&#64;angular/core';
import &#123; provideRouter &#125; from '&#64;angular/router';
import &#123; routes &#125; from './app.routes';

export const appConfig: ApplicationConfig = &#123;
  providers: [provideRouter(routes)]
&#125;;</pre>
<h3>Ajout des liens dans le template (app.component.html) :</h3>
<pre class="tab">
&#60;!-- Menu de navigation --&#62;
&#60;nav&#62;
  &#60;!-- Lien vers la page d'accueil avec la directive routerLink --&#62;
  &#60;a routerLink="/"&#62;Accueil&#60;/a&#62;

  &#60;!-- Lien vers la page "À propos" avec la directive routerLink --&#62;
  &#60;a routerLink="/about"&#62;À propos&#60;/a&#62;
&#60;/nav&#62;

&#60;!-- Point d'insertion pour le contenu dynamique des routes --&#62;
&#60;router-outlet&#62;&#60;/router-outlet&#62;</pre>
    </div>
  `,
  styles: `
  pre,p{
    font-size:15px;
  }
.tab {
            background-color: #f8f9fa;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
            font-family: monospace;
            font-weight:bold;
        }
  `,
})
export class RoutesIntroComponent {}
