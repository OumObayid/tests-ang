import { Component, viewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test28',
  standalone: true,
  template: `
    <div class="container">
      <h1>
        ViewChildren():accéder à plusieurs éléments d'un composant
      </h1>

      <hr/>
      <p class="p-2" #paragraph>Premier paragraphe</p>
      <p class="p-2" #paragraph>Deuxième paragraphe</p>
      <p class="p-2" #paragraph>Troisième paragraphe</p>

      <button class="btn btn-primary mx-3" (click)="showParagraphs()">
        Mettre en evidence les paragraphes
      </button>
      <button class="btn btn-success" (click)="reinitialise()">
        Réinitialiser les paragraphes
      </button>
      
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
viewChildren() est un signal pour accéder à plusieurs éléments enfants d'un composant.
La fonction viewChildren() retourne un signal contenant un tableau d'ElementRef.
Pour accéder aux éléments, il faut utiliser les parenthèses () pour obtenir la valeur du signal.

<strong>Comment ça marche:</strong>

  - dans la template referencier les elements du dom :
  &#60;p class="p-2" #paragraph&#62;Premier paragraphe&#60;/p&#62;
  &#60;p class="p-2" #paragraph&#62;Deuxième paragraphe&#60;/p&#62;
  &#60;p class="p-2" #paragraph&#62;Troisième paragraphe&#60;/p&#62;

  - dans ts:Récupérer tous les éléments avec la référence #paragraph
  <strong class="text-danger">paragraphs = viewChildren&#60;ElementRef&#62;('paragraph');</strong>

  - utilisation:
  <strong class="text-danger">this.paragraphs().forEach((p) => &#123;
  p.nativeElement....
  &#125;);
  </strong>
      </pre>
    </div>
  `,
})
export class Test28Component {
  // Récupère tous les éléments avec la référence #paragraph
  paragraphs = viewChildren<ElementRef>('paragraph');

  showParagraphs() {
    // Modifie la background de chaque paragraphe
    this.paragraphs().forEach((p) => {
      p.nativeElement.style.backgroundColor = '#ffc09f';
    });
  }
  reinitialise() {
    this.paragraphs().forEach((p) => {
      p.nativeElement.style.backgroundColor = '';
    });
  }
}
