import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: `
    <div class="container">
      <h1>
        <strong>Les observables: créer, subscribe, unsubscribe</strong>
      </h1>
      <hr />
      <div>Compteur: {{ compteur }}</div>
      <button class="btn btn-primary me-4" (click)="sabonner()">
        Démarrer le compteur
      </button>
      <button class="btn btn-danger" (click)="sedesabonner()">
        Arrêter le compteur
      </button>
    </div>
  `,
  styles: [],
})
export class RxjsbservableComponent {
  compteur: number = 0;

  // Créer un observable
  monObservable = new Observable<number>((observer) => {
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
  sabonner() {
    if (!this.subscription || this.subscription.closed) {
      this.subscription = this.monObservable.subscribe({
        next: (value) => (this.compteur = value), // Affectation correcte
        error: (err) => console.error('Erreur:', err), // Affichage de l'erreur
        complete: () => console.log('Observable complété.'), // Affichage du message de complétion
      });
      //ou tout simplement:
      // this.subscription = this.monObservable.subscribe((value) => this.compteur = value);
    }
  }



  // Se désabonner de l'observable
  sedesabonner() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Désabonné.');
    }
  }

  // Nettoyage lors de la destruction du composant
  ngOnDestroy() {
    this.sedesabonner();
  }
}
