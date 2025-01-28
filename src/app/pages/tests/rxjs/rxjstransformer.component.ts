import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of, interval, range, EMPTY, materialize, dematerialize, NextNotification, ErrorNotification, Subscription, from } from 'rxjs';
import {
  map, scan, reduce, flatMap, bufferTime, bufferCount, buffer, bufferToggle,
  bufferWhen, window, windowCount, windowTime, windowToggle, windowWhen,
  concatMap, exhaustMap, expand, groupBy, pairwise, toArray,
  take,
  delay,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-transformation',
  imports:[CommonModule],
  template:`
  <div class="container">
  <h2>Opérateurs de transformation RxJS</h2>
  <div class="btn-group flex-wrap">
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useMap()">map</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useScan()">scan</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useReduce()">reduce</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useFlatMap()">flatMap</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useBufferTime()">bufferTime</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useBufferCount()">bufferCount</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useBuffer()">buffer</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useBufferToggle()">bufferToggle</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useBufferWhen()">bufferWhen</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useWindow()">window</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useWindowCount()">windowCount</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useWindowTime()">windowTime</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useConcatMap()">concatMap</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useExhaustMap()">exhaustMap</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useExpand()">expand</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useGroupBy()">groupBy</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="usePairwise()">pairwise</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useMaterialize()">materialize</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useDematerialize()">dematerialize</button>
    <button class="btn btn-secondary me-2 mb-2 rounded" (click)="useToArray()">toArray</button>
  </div>
  <div *ngFor="let result of results">
    {{ result }}
  </div>
</div>

  `,
})
export class RxjsTransformationComponent {
  results: string[] = [];
  private subscriptions: Subscription[] = [];
  // map : Transformation simple de valeurs
  useMap() {
    this.results = [];
     const sub = of(1, 2, 3, 4).pipe(map(x => x * 10))
      .subscribe(value => this.results.push(value.toString()));
  }

  // scan : Accumule les valeurs comme reduce, mais émet à chaque étape
  useScan() {
    this.results = [];
     const sub = from([1, 2, 3, 4]).pipe(scan((acc, curr) => acc + curr, 0))
      .subscribe(value => this.results.push(value.toString()));
  }

  // reduce : Accumule les valeurs et n'émet qu'une fois le calcul terminé
  useReduce() {
    this.results = [];
     const sub = from([1, 2, 3, 4]).pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe(value => this.results.push(value.toString()));
  }

  // flatMap : Aplatissement d'observables imbriqués
  useFlatMap() {
    this.results = [];
     const sub = of(1, 2, 3).pipe(flatMap(x => of(`Valeur ${x * 2}`)))
      .subscribe(value => this.results.push(value));
  }

  // bufferTime : Regroupe les valeurs sur une période de temps
  useBufferTime() {
    this.results = [];
     const sub = interval(500).pipe(bufferTime(2000), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));
  }

  // bufferCount : Regroupe les valeurs par lot de 3
  useBufferCount() {
    this.results = [];
     const sub = interval(500).pipe(bufferCount(3), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));
  }

  // buffer : Stocke les valeurs jusqu'à déclenchement d'un second observable
  useBuffer() {
    this.results = [];
     const sub =  interval(2000);
    interval(500).pipe(buffer(sub), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));
  }

  // bufferToggle : Active/désactive le buffer avec deux observables
  useBufferToggle() {
    this.results = [];
     const sub  = interval(2000);
    const closingFn = () => interval(1000);
    interval(500).pipe(bufferToggle(sub, closingFn), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));
  }

  // bufferWhen : Regroupe les valeurs jusqu'à ce qu'un observable émette
  useBufferWhen() {
    this.results = [];
     const sub = interval(500).pipe(bufferWhen(() => interval(2000)), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));
  }

  // window : Stocke les valeurs dans des sous-observables
  useWindow() {
    this.results = [];
     const sub = interval(500).pipe(window(interval(2000)), take(5))
      .subscribe(windowObs => windowObs.subscribe(value => this.results.push(value.toString())));
  }

  // windowCount : Divise en fenêtres de 3 valeurs
  useWindowCount() {
    this.results = [];
     const sub = interval(500).pipe(windowCount(3), take(5))
      .subscribe(windowObs => windowObs.subscribe(value => this.results.push(value.toString())));
  }

  // windowTime : Stocke les valeurs par période
  useWindowTime() {
    this.results = [];
     const sub = interval(500).pipe(windowTime(2000), take(5))
      .subscribe(windowObs => windowObs.subscribe(value => this.results.push(value.toString())));
  }

  // concatMap : Exécute les observables un par un dans l'ordre
  useConcatMap() {
    this.results = [];
     const sub = from([1, 2, 3]).pipe(concatMap(x => of(`Concat ${x}`).pipe(delay(1000))))
      .subscribe(value => this.results.push(value));
  }

  // exhaustMap : Ignore les nouveaux observables si un est déjà actif
  useExhaustMap() {
    this.results = [];
     const sub = from([1, 2, 3]).pipe(exhaustMap(x => of(`Exhaust ${x}`).pipe(delay(1000))))
      .subscribe(value => this.results.push(value));
  }

  // expand : Émet récursivement une valeur
  useExpand() {
    this.results = [];
     const sub = of(2).pipe(expand(x => (x < 50 ? of(x * 2) : EMPTY)), take(10))
      .subscribe(value => this.results.push(value.toString()));
  }

  // groupBy : Regroupe les valeurs selon une clé
  useGroupBy() {
    this.results = [];
     const sub = from([
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'B' },
    ])
      .pipe(groupBy(item => item.category))
      .subscribe(group => group.subscribe(value => this.results.push(JSON.stringify(value))));
  }

  // pairwise : Émet les valeurs par paire successive
  usePairwise() {
    this.results = [];
     const sub = interval(1000).pipe(pairwise(), take(5))
      .subscribe(value => this.results.push(JSON.stringify(value)));
  }

  // materialize : Convertit les notifications en objets
  useMaterialize() {
    this.results = [];
     const sub = of(1, 2, 3).pipe(materialize())
      .subscribe(value => this.results.push(JSON.stringify(value)));
  }

  // dematerialize : Convertit les objets de notifications en valeurs
  useDematerialize() {

const notifA: NextNotification<string> = { kind: 'N', value: 'A' };
const notifB: NextNotification<string> = { kind: 'N', value: 'B' };
const notifE: ErrorNotification = { kind: 'E', error: new TypeError('x.toUpperCase is not a function') };

const materialized = of(notifA, notifB, notifE);

const upperCase = materialized.pipe(dematerialize());
upperCase.subscribe({
  next: x => this.results.push(x),
  error: e => console.error(e)
});
  }


  // toArray : Regroupe toutes les valeurs en un tableau
  useToArray() {
    this.results = [];
     const sub = range(1, 10).pipe(toArray())
      .subscribe(value => this.results.push(JSON.stringify(value)));
  }

  ngOnDestroy() {
    // Désabonne chaque observable pour éviter les fuites mémoire
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
