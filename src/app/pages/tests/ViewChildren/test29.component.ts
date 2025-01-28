import { Enfant29Component } from './enfant29.component';
import { Component, viewChildren } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-test29',
  standalone: true,
  imports: [Enfant29Component],
  template: `
    <div class="container">
      <h1>viewChildren : Accéder aux composants enfants</h1>
      <hr />
      <div class="p-2 border">
        <h3>Parent</h3>

        <!-- Utilisation de *ngFor pour afficher chaque composant enfant -->
        @for (user of users; track user.id) {
        <div class="p-2 border my-2">
          <h3>Enfant</h3>
          <app-enfant29 [propsUser]="user"></app-enfant29>
        </div>
        }@empty { Aucun utilisateur trouvé }

        <button class="btn btn-primary mt-3 me-3" (click)="colorCardAllUsers()">
          Mettre en évidence tous les utilisateurs
        </button>
        <button class="btn btn-danger mt-3" (click)="initializeAllUsers()">
          Réinitialiser
        </button>
      </div>
      <div class="mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
Il sert à accéder à des enfants ainsi à leurs propriétés et leurs méthodes
La méthode ViewChildren(Enfant29Component) retourne un QueryList&#60;Enfant29Component&#62;, qui représente une liste dynamique de tous les enfants de type Enfant29Component.
Vous pouvez utiliser cette liste pour interagir avec les composants enfants dans le parent.

<strong>syntaxe:</strong>
Pour récupérer des enfants via la nouvelle viewChildren,
<strong class="text-danger">userCards = viewChildren(Enfant29Component);</strong>
userCards est une liste d'enfants du type Enfant29Component, nous avons deux enfants dans la template.

<strong>utilisation:</strong>
viewChildren() retourne un signal tableau. On accède aux propriétés et aux méthodes des méthodes des enfants en parcourant le tableau:
<strong class="text-danger">
const cards = this.userCards();
console.log(' this.userCards() :',  this.userCards());
cards.forEach((card) => &#123;
card....; // Acceder à une méthode ou une propriété publique de l'enfant
&#125;);
</strong>

      </pre>
    </div>
  `,
})
export class Test29Component {
  users: User[] = [
    {
      id: '1',
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      tel: '',
      address: '',
    },
    {
      id: '2',
      firstname: 'kain',
      lastname: 'adam',
      email: 'kain@example.com',
      tel: '',
      address: '',
    },
  ];

  // Récupération des enfants via la nouvelle API viewChildren, il retourne un tableau
  userCards = viewChildren(Enfant29Component);

  // Méthode pour mettre en évidence tous les utilisateurs
  colorCardAllUsers() {
    const cards = this.userCards();
    console.log(' this.userCards() :', this.userCards());
    cards.forEach((card) => {
      card.colorCardUser(); // Appel d'une méthode publique de l'enfant

    });
  }
  initializeAllUsers() {
    const cards = this.userCards();
    cards.forEach((card) => {
      card.initialize(); // Appel d'une méthode publique de l'enfant
    });
  }
}
