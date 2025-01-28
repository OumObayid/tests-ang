import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs2',
  template: `
    <div class="container">
      <h1>
        <strong>Les observables: créer, subscribe, unsubscribe</strong>
      </h1>
      <hr>
      <div> Compteur: {{ compteur }}</div>
      <button class="btn btn-primary" (click)="subscribe()">Démarrer le compteur</button>
      <button class="btn btn-danger" (click)="unsubscribe()">Arrêter le compteur</button>
    </div>
  `,
  styles: [],
})
export class Rxjs2Component {
  compteur: number = 0;
  // Créer un observable
  observable = new Observable<number>((observer) => {
    let count = 0;
    const intervalId = setInterval(() => {
      observer.next(count);
      count++;
    }, 1000);

    // Nettoyage quand l'observable est complété ou arrêté
    return () => clearInterval(intervalId);
  });

  subscription: any;
  // Souscrire à l'observable
  subscribe() {
    if (!this.subscription || this.subscription.closed) {
      this.subscription = this.observable.subscribe({
        next: (value) => (this.compteur = value), // Affectation correcte
        error: (err) => console.error('Erreur:', err),
        complete: () => console.log('Observable complété.'),
      });
    }
  }

  // Se désabonner de l'observable
  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Désabonné.');
    }
  }

  // Nettoyage lors de la destruction du composant
  ngOnDestroy() {
    this.unsubscribe();
  }
}
