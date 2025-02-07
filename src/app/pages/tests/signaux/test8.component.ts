import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports:[FormsModule,CommonModule],
  template: `
    <div class="container">
      <h1>model() pour du double data-binding</h1>
      <hr>
      <input class="form-control w-25" [value]="username()" (input)="updateUsername($event)" placeholder="Entrez votre nom d'utilisateur">
      <div class="my-2">Nom d'utilisateur actuel : {{ username() }}</div>
      <button class="btn btn-primary" (click)="clearUsername()">Effacer</button>
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
Dans cet exemple, l'utilisation de model() met en avant une nouvelle manière de gérer le double data-binding <br> dans Angular. Voici une explication détaillée des différentes parties de cet exemple :

<strong>1. pour la gestion des signaux :</strong>
model() est une fonction qui agit comme un signal dans Angular (concept introduit dans Angular 16).
Un signal est une donnée réactive qui peut être lue ou mise à jour. Ici, username est un signal initialisé à une valeur vide ('').

<strong>2. Double Data-Binding via model():</strong>
Le double data-binding signifie que les modifications dans le champ de saisie sont reflétées automatiquement dans le modèle et vice-versa.
Dans le template :
[value]="username()" : Le champ d'entrée affiche la valeur actuelle du signal username.
(input)="updateUsername($event)" : À chaque saisie utilisateur, la méthode updateUsername met à jour le signal username.
Dans le modèle (classe TypeScript) :
username.set(value) : Met à jour la valeur du signal.

<strong>3. Gestion des interactions :</strong>
Méthode updateUsername:
Extrait la valeur de l'entrée utilisateur depuis l'événement input et met à jour le signal.
Méthode clearUsername:
Réinitialise le signal username à une chaîne vide ('').

<strong>4. Affichage Réactif avec username():</strong>
Dans le template, {{ username() }} permet d'afficher dynamiquement la valeur actuelle du signal.
Toute mise à jour de username entraîne automatiquement la mise à jour de l'affichage.
      </pre>
      <hr>
      <pre>
Bref cours sur model() et signaux dans Angular
<strong>1. Introduction aux Signaux dans Angular :</strong>
Les signaux sont un nouveau mécanisme réactif introduit à partir d'Angular 16. Ils simplifient la gestion de l'état et du data-binding.
Un signal est une valeur observable qui peut être lue (par un appel comme signal()) ou mise à jour (par set()).

<strong>2. Créer un signal avec model() :</strong>
model() est une fonction spécifique qui agit comme un signal réactif pour des cas pratiques comme le double data-binding.
Syntaxe : const mySignal = model(initialValue);
initialValue : La valeur initiale du signal.

<strong>3. Utilisation des Signaux :</strong>
Lecture de la valeur : Appelez la fonction, par exemple mySignal().
Mise à jour de la valeur : Utilisez mySignal.set(newValue).
Réactivité : Les signaux déclenchent automatiquement la mise à jour de tout élément ou expression qui les utilise dans un template.

<strong>4. Avantages des Signaux :</strong>
Réactivité simplifiée : Plus besoin de gestion complexe comme dans RxJS (pas de subscribe()).
Optimisation des performances : Angular suit les signaux directement, sans zone.js.
Simplification du double data-binding : Avec model(), il devient facile de synchroniser l'interface utilisateur avec le modèle.

      </pre>
    </div>
  `,
})
export class Test8Component {
  username = model(''); // Modèle pour le double data-binding
  // Méthode pour mettre à jour le modèle
  updateUsername(event: Event): void {
    const input = event.target as HTMLInputElement; // Typage explicite
    this.username.set(input.value);
  }

  // Méthode pour effacer le contenu du champ
  clearUsername(): void {
    this.username.set(''); // Réinitialise le signal lié au modèle
  }
}
