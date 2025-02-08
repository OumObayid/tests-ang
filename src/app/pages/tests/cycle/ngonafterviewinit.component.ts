import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2 class="text-primary">Liste des utilisateurs</h2>
      <button class="btn btn-success my-3" (click)="showUsers()">
        Afficher Utilisateurs
      </button>
      <ul class="list-group" *ngIf="users.length > 0" #userList>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let user of users"
        >
          <span
            ><strong>{{ user.name }}</strong> - {{ user.email }}</span
          >
          <span class="badge bg-info rounded-pill">ID: {{ user.id }}</span>
        </li>
      </ul>
      <!-- --------------------Template pour afficher le code source---------------- -->
      <!-- Nav Tabs -->
      <ul class="nav nav-tabs mt-5" id="codeTabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="c1-tab"
            data-bs-toggle="tab"
            data-bs-target="#c1"
            type="button"
            role="tab"
            aria-controls="c1"
            aria-selected="true"
          >
            Composant Parent
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content" id="codeTabsContent" style="position: relative;">
        <!-- Composant C1 -->
        <div
          class="tab-pane fade show active "
          id="c1"
          role="tabpanel"
          aria-labelledby="c1-tab"
          style="position: relative;"
        >
          <!-- Bouton de copie pour C1 -->
          <i (click)="copy1()" class="fas fa-copy"></i>
          <span class="confirm" *ngIf="clicked"
            >copied <i class="fas fa-check"></i>
          </span>
          <pre #tab1 class="tab fw-bold" ngNonBindable>
import &#123; AfterViewInit, Component, ElementRef, ViewChild &#125; from '&#64;angular/core';
import &#123; CommonModule &#125; from '&#64;angular/common';

&#64;Component(&#123;
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: &#96;
    &#60;div class="container mt-4"&#62;
      &#60;h2 class="text-primary"&#62;Liste des utilisateurs&#60;/h2&#62;
      &#60;button class="btn btn-warning my-3" (click)="showUsers()"&#62;
        Afficher Utilisateurs
      &#60;/button&#62;
      &#60;ul class="list-group" *ngIf="users.length &#62; 0" #userList&#62;
        &#60;li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let user of users"
        &#62;
          &#60;span
            &#62;&#60;strong&#62;&#123;&#123; user.name &#125;&#125;&#60;/strong&#62; - &#123;&#123; user.email &#125;&#125;&#60;/span
          &#62;
          &#60;span class="badge bg-info rounded-pill"&#62;ID: &#123;&#123; user.id &#125;&#125;&#60;/span&#62;
        &#60;/li&#62;
      &#60;/ul&#62;
    &#60;/div&#62;
  &#96;,
&#125;)
export class NgOnAfterViewInitComponent implements AfterViewInit &#123;
  &#64;ViewChild('userList') userList!: ElementRef;

  users: any[] = [];

  showUsers() &#123;
    this.users = [
      &#123; id: 1, name: 'Alice', email: 'alice&#64;example.com' &#125;,
      &#123; id: 2, name: 'Bob', email: 'bob&#64;example.com' &#125;,
      &#123; id: 3, name: 'Charlie', email: 'charlie&#64;example.com' &#125;,
    ];
  &#125;

  ngAfterViewInit() &#123;
    if (this.userList) &#123;
      setTimeout(() =&#62; &#123;
        this.userList.nativeElement.style.border = '2px solid blue';
      &#125;);
    &#125;
  &#125;
&#125;</pre
          >
        </div>
      </div>
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>
        .......
      </pre
      >
      <!-- --------------------Fin Template pour afficher le code source---------------- -->
    </div>
  `,
  styles: `
    // -------------------------style pour afficher le code source----------------
    pre{
      font-size:15px;
     }
    .fa-check {
            color: grey;
          }

          i.fa-copy {
            cursor: pointer;
            color: grey;
            font-size: 20px;
            position: absolute;
            top: 20px;
            right: 20px;
            transition: color 0.5s ease, transform 0.3s ease;
            display: inline-block;
            padding: 10px;
          }

            i.fa-copy:hover{
              color:#aaacad;
            transform: scale(1.2); /* Effet d'agrandissement au survol */
            cursor: pointer; /* Change le curseur pour indiquer une action cliquable */
            }
            .confirm{
              position: absolute;
              top: 30px;
              right: 60px;
              color:grey;
                font-weight:bold;
            }
             .tab {
               background-color: #f8f9fa;
               padding: 15px;
               border: 1px solid #ddd;
               border-radius: 5px;
               overflow-x: auto;
               font-family: monospace;
             }
             .active {
            background-color:#eef06f !important; /* Couleur de l'onglet actif */
            border-color: grey; /* Couleur de la bordure pour l'onglet actif */
          }
             h3 {
               margin-top: 20px;
             }
    // -------------------------Fin style pour afficher le code source----------------
             `,
})
export class NgOnAfterViewInitComponent implements AfterViewInit {
  @ViewChild('userList') userList!: ElementRef;

  users: any[] = [];

  showUsers() {
    this.users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    ];
  }

  ngAfterViewInit() {
    if (this.userList) {
      setTimeout(() => {
        this.userList.nativeElement.style.border = '2px solid blue';
      });
    }
  }
  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  clicked: boolean = false;
  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy2() {
    const element = this.infoTab2()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}
