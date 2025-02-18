import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-laravel-accueil',
  imports: [RouterLink],
  template: `
    <div class="body container pt-5">
      <div class="row d-flex flex-wrap">
        <div class="col-md-6 col-12 p-2">
          <div class="p-3 text-center">
            <h1>🔥 Laravel - Le Framework PHP Moderne</h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
              alt="Laravel Logo"
            />
            <p class="lead">
              Un framework puissant pour le développement d'applications web
              rapides et sécurisées.
            </p>
            <a routerLink="/c-est-quoi-laravel" class="btn btn-danger"
              >Commencer 🚀</a
            >
          </div>
        </div>
        <div class="col-md-6 col-12 p-2">
          <iframe
            class="w-100"
            height="315"
            src="https://www.youtube.com/embed/CX1N0iBXdwA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  `,

  styles: `

@media (min-width: 768px){
  .body{
  height : calc(100vh - 103px);
}
}
img {
   max-width: 80px;
   margin-bottom: 10px;
 }

 .btn {
   margin-top: 10px;
 }
   `,
})
export class LaravelAccueilComponent {
  constructor() {}
}
