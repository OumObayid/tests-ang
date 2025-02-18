import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-react',
  imports: [RouterLink],
  template: `
    <div class="container mt-5">
      <div class="row d-flex flex-wrap">
        <div class="col-md-6 col-12 p-2">
          <div class="p-3 text-center">
            <h1>⚛️ Découvrez React.js</h1>
            <img
              style="max-width: 80px; margin-bottom: 10px;"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
            />
            <p class="lead">
              Une bibliothèque JavaScript moderne pour des interfaces
              dynamiques.
            </p>
            <a routerLink="/componenta" class="btn btn-primary">Commencer 🚀</a>
          </div>
        </div>
        <div class="col-md-6 col-12 p-2">
          <iframe
            class="w-100"
            height="315"
            src="https://www.youtube.com/embed/Tn6-PIqc4UM"
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

  img {
    max-width: 80px;
    margin-bottom: 10px;
  }

  .btn {
    margin-top: 10px;
  }

  `,
})
export class ReactComponent {
  constructor() {}
}
