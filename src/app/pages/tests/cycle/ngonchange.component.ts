import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngonchanges',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2 class="text-primary">Changer le texte dynamique</h2>

      <button class="btn btn-success my-3" (click)="changeText()">Changer le texte</button>

      <div class="mt-3">
        <p>Texte actuel : <strong>{{ dynamicText }}</strong></p>
        <p *ngIf="previousText">Texte précédent : <strong>{{ previousText }}</strong></p>
      </div>
    </div>
  `,
})
export class NgOnChangesComponent implements OnChanges {
  @Input() dynamicText: string = 'Texte initial';
  previousText: string | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dynamicText']) {
      this.previousText = changes['dynamicText'].previousValue;
    }
  }

  changeText() {
    this.dynamicText = 'Le texte a été changé après le clic';
  }
}
