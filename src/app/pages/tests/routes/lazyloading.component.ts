import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template:`
<h1>Chargement de Modules avec Lazy Loading</h1>
<hr>
<p>Lazy loading charge des modules uniquement quand l’utilisateur en a besoin.</p>
<h2>Exemple: Lazy Loading d’un Module Admin</h2>
<h4>1. Définition de la route en Lazy Loading (app.routes.ts) :</h4>
<pre class="tab">
&#123; path: 'admin', loadChildren: () =&#62; import('./admin/admin.routes').then(m =&#62; m.routes) &#125;</pre>
<h4>2. Création du fichier admin.routes.ts :</h4>
<pre class="tab">import &#123; Routes &#125; from '&#64;angular/router';
import &#123; AdminComponent &#125; from './admin.component';

export const routes: Routes = [&#123; path: '', component: AdminComponent &#125;];
</pre><h4>Module AdminComponent :</h4>
<pre class="tab">import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-admin',
  template: &#96;&#60;h2&#62;Bienvenue dans l'admin&#60;/h2&#62;&#96;
&#125;)
export class AdminComponent &#123;&#125;</pre>

  `,
  styles:``,
})
export class LazyLoadingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}


