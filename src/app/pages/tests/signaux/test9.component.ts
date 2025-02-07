import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// difference entre les deux methodes set() et update() d'un signal
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports:[FormsModule],
  template: `
    <div class="container">
      <h1>Difference entre les deux methodes set() et update() d'un signal</h1>
      <hr>
      <div class="mt-3 border p-3">
        <h4>Exemple 1 : Compteur</h4>
        <p>Compteur : {{ counter() }}</p>
        <button class="btn btn-danger" (click)="resetCounter()">
          Réinitialiser
        </button>
        <button class="btn btn-success mx-3" (click)="incrementCounter()">
          Incrémenter
        </button>
      </div>

      <div class="mt-3 border p-3">
        <h4>Exemple 2 : Nom</h4>
        <p>
          Nom :
          <input type="text" [(ngModel)]="nom"  />
        </p>
        <button class="btn btn-danger" (click)="resetNom()">
          Réinitialiser
        </button>
        <button class="btn btn-success mx-3" (click)="capitaliseNom()">
          Capitaliser
        </button>
        <button class="btn btn-success mx-3" (click)="upperCaseNom()">
          Mettre au majuscule
        </button>
        <button class="btn btn-success mx-3" (click)="lowerCaseNom()">
          Mettre au minuscule
        </button>
      </div>
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
<strong>1. set():</strong>
Description : La méthode set() permet de remplacer directement la valeur actuelle du signal par une nouvelle valeur.
Usage : Idéal pour mettre à jour la valeur du signal lorsqu'on connaît la nouvelle valeur exacte.

Exemple :
const username = model('John'); // Signal initialisé à "John"
username.set('Doe'); // La valeur est maintenant "Doe"
console.log(username()); // Résultat : "Doe"

<strong>2. update():</strong>
Description : La méthode update() prend une fonction en paramètre, qui reçoit la valeur actuelle <br> du signal et retourne la nouvelle valeur après une transformation.
Usage : Utile pour mettre à jour la valeur existante en fonction de sa valeur actuelle, sans avoir à la lire ou à la modifier manuellement.

Exemple :
const counter = model(0); // Signal initialisé à 0
counter.update(value => value + 1); // Incrémente la valeur actuelle de 1
console.log(counter()); // Résultat : 1
counter.update(value => value * 2); // Multiplie la valeur actuelle par 2
console.log(counter()); // Résultat : 2

      </pre>
    </div>
  `,
})
export class Test9Component {
  counter = signal(0); // Signal pour le compteur
  nom = signal(''); // Signal pour le champ texte

  // Méthodes pour le compteur
  resetCounter() {
    this.counter.set(0); // Réinitialise la valeur à 0
  }

  incrementCounter() {
    this.counter.update((value) => value + 1); // Incrémente la valeur actuelle de 1
  }



  resetNom() {
    this.nom.set(''); // Réinitialise le nom à une chaîne vide
  }

  capitaliseNom() {
    this.nom.update(
      (currentValue) => currentValue.charAt(0).toUpperCase() + currentValue.slice(1).toLowerCase()
    ); // Capitalise le nom
  }
  upperCaseNom() {
    this.nom.update(
      (currentValue) => currentValue.toUpperCase()
    ); // Capitalise le nom
  }
  lowerCaseNom() {
    this.nom.update(
      (currentValue) => currentValue.toLowerCase()
    ); // Capitalise le nom
  }
}


