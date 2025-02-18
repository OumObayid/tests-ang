import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-angular-accueil',
  imports: [RouterLink],
  template: `
    <div class="container mt-5">
      <div class="row d-flex flex-wrap">
        <div class="col-md-6 col-12 p-2">
          <div class="p-3 text-center">
            <h1>🌍 Découvrez Angular</h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
              alt="Angular Logo"
              width="100"
            />
            <p class="lead">
              Un framework puissant pour créer des applications web dynamiques.
            </p>
            <a routerLink="/data-binding" class="btn btn-danger"
              >Commencer 🚀</a
            >
          </div>
        </div>
        <div class="col-md-6 col-12 p-2">
          <iframe
            class="w-100"
            height="315"
            src="https://www.youtube.com/embed/7gbtO0Stzi8"
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
  border : 1px solid red;
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
export class AngularAccueilComponent {
  constructor() {}
}
