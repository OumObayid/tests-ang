import { SidebarComponent } from './pages//tests/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeadertestComponent } from './pages/tests/headertest.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    HeadertestComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
  ],
  template: `
    <app-headertest (menuSelected)="onMenuSelected($event)"></app-headertest>
    <div class="d-flex">
      <div class="sidebar col-lg-2 custom-col">
        <app-sidebar [selectedMenu]="selectedMenu"></app-sidebar>
      </div>
      <div class="content flex-grow-1 flex-wrap col-lg-9">
        <router-outlet></router-outlet>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: `
  .custom-col {
  width: 20.8333%; /* (2.5 / 12) * 100 */
}
h1 {
  color: rgb(245, 156, 3);
}

p {
  font-size: 16px;
}

.main-container {
  flex: 1; /* Permet au router-outlet de prendre tout l'espace disponible */
  min-height: calc(100vh - 110px); /* Ajustez la hauteur du footer ici */
}

.footer {
  height: 60px; /* Hauteur fixe du footer */
}
.main-container {
  display: flex;
}

.sidebar {
  background-color: #f8f9fa;
  padding: 10px;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

  `,
})
export class AppComponent {
  selectedMenu: string = 'Angular';

  onMenuSelected(menu: string) {
    this.selectedMenu = menu;
  }
}
