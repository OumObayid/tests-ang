import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-enfant20',
  imports: [CommonModule],
  template: `
    <div class="border p-3 mt-3">
      <h3 class="fw-bolder">Child Component</h3>
      <p>
        Message from Parent: <span class="text-danger">{{ message }}</span>
      </p>
      <p><strong>Change Log:</strong></p>
      <ul>
        <li *ngFor="let log of changeLog">{{ log }}</li>
      </ul>
    </div>
  `,
  styles: [``],
})
export class Enfant20Component implements OnChanges {
  @Input() message: string = ''; // Valeur envoyée par le parent
  changeLog: string[] = []; // Stocke les changements

  // Détecte les changements et agit dessus
  ngOnChanges(changes: SimpleChanges) {
    if (changes['message']) {
      console.log(
        'La valeur a changé de',
        changes['message'].previousValue,
        'à',
        changes['message'].currentValue
      );
    }
    if (changes['message']) {
      const previous = changes['message'].previousValue;
      const current = changes['message'].currentValue;
      this.changeLog.push(`Message changed from '${previous}' to '${current}'`);
    }
  }
}

// Explications détaillées :
// 1. ngOnChanges(changes: SimpleChanges)
// Cette méthode est une lifecycle hook d'Angular qui est automatiquement appelée lorsque l'une des propriétés marquées avec @Input() dans le composant subit une modification.
// Elle reçoit un paramètre changes de type SimpleChanges, qui est un objet contenant des informations sur toutes les propriétés modifiées.
// 2. if (changes['message'])
// Vérifie si la propriété message a été modifiée parmi les @Input() de ce composant.
// changes['message'] contient les détails spécifiques des changements pour la propriété message.
// 3. const previous = changes['message'].previousValue;
// Accède à la valeur précédente de la propriété message avant le changement.
// Si c'est la première fois que message est défini (pas de valeur précédente), previousValue sera undefined.
// 4. const current = changes['message'].currentValue;
// Accède à la nouvelle valeur actuelle de la propriété message après le changement.
// 5. this.changeLog.push(...)
// Ajoute une entrée dans un tableau nommé changeLog pour enregistrer les modifications de la propriété message.
