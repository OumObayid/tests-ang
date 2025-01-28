import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  of,
  interval,
  timer,
  defer,
  merge,
  range,
  Subscription,
  from,
  fromEvent,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-creation-operators',
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h1>RxJS : Opérateurs de Création</h1>
      <hr />
      <button class="btn btn-primary me-2" (click)="useOf()">of()</button>
      <button class="btn btn-primary me-2" (click)="useFrom()">from()</button>
      <button class="btn btn-primary me-2" (click)="useInterval()">
        interval()
      </button>
      <button class="btn btn-primary me-2" (click)="useTimer()">timer()</button>
      <button class="btn btn-primary me-2" (click)="useFromEvent()">
        fromEvent()
      </button>
      <button class="btn btn-primary me-2" (click)="useAjax()">ajax()</button>
      <button class="btn btn-primary me-2" (click)="useDefer()">defer()</button>
      <button class="btn btn-primary me-2" (click)="useMerge()">merge()</button>
      <button class="btn btn-primary me-2" (click)="useRange()">range()</button>

      @if (code){
      <p><strong class="mt-4 ">Code:</strong></p>
      <p>{{ code }}</p>
      }
      @if ( results.length > 0){
      <strong class="mt-3">Résultats :</strong>
      <ul>
        <li *ngFor="let item of results">{{ item }}</li>
      </ul>
      }
    </div>
  `,
  styles: [],
})
export class RxjscreationComponent implements OnDestroy {
  results: string[] = [];
  subscription: Subscription | null = null;
  code: string = '';
  resetResults() {
    this.results = [];
    this.subscription?.unsubscribe(); // Désabonner l'observable précédent
  }

  useOf() {
    this.resetResults();
    of(1, 2, 3, 4, 5).subscribe((value) => this.results.push(value.toString()));
    this.code = `of(1, 2, 3, 4, 5).subscribe(value => this.results.push(value.toString()));`;
  }

  useFrom() {
    this.resetResults();
    from([10, 20, 30, 40, 50]).subscribe((value) =>
      this.results.push(value.toString())
    );
  }

  useInterval() {
    this.resetResults();
    this.subscription = interval(1000)
      .pipe(take(5))
      .subscribe((value) => this.results.push(value.toString()));
  }

  useTimer() {
    this.resetResults();
    this.subscription = timer(2000, 1000)
      .pipe(take(5))
      .subscribe((value) => this.results.push(value.toString()));
  }

  useFromEvent() {
    this.resetResults();
    this.subscription = fromEvent(document, 'click').subscribe(() =>
      this.results.push('Click détecté !')
    );
  }

  useAjax() {
    this.resetResults();
    ajax('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(map((res) => JSON.stringify(res.response)))
      .subscribe((value) => this.results.push(value));
  }

  useDefer() {
    this.resetResults();
    defer(() => (Math.random() > 0.5 ? of('Succès') : of('Échec'))).subscribe(
      (value) => this.results.push(value)
    );
  }

  useMerge() {
    this.resetResults();
    const obs1$ = interval(1000).pipe(
      map((v) => `A${v}`),
      take(3)
    );
    const obs2$ = interval(500).pipe(
      map((v) => `B${v}`),
      take(5)
    );
    this.subscription = merge(obs1$, obs2$).subscribe((value) =>
      this.results.push(value)
    );
  }

  useRange() {
    this.resetResults();
    range(1, 10).subscribe((value) => this.results.push(value.toString()));
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); // Nettoyer l'abonnement en quittant le composant
  }
}
