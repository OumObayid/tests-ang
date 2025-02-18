import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-node-accueil",
  imports:[RouterLink],
  template: `
<div class="body container pt-5">
  <div class="row d-flex flex-wrap">
    <div class="col-md-6 col-12 p-2">
      <div class="p-3 text-center">
        <h1>🌐 Découvrez Node.js</h1>
    <img src="https://nodejs.org/static/images/logo.svg "  alt="Node.js Logo">
    <p class="lead">Un environnement JavaScript côté serveur pour des applications performantes.</p>
    <a routerLink="/introduction-a-node.js" class="btn btn-primary">Commencer 🚀</a>

      </div>
    </div>
    <div class="col-md-6 col-12 p-2">
      <iframe
        class="w-100"
        height="315"
        src="https://www.youtube.com/embed/bOZzzuXWeFE"
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
export class NodeAccueilComponent {
  constructor() {}
}
