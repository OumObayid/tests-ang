import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeadertestComponent } from "./pages/tests/headertest.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeadertestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'tests-ang';








}
