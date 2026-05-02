import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortafolioNavbar } from "./navbar/portafolioNavbar/portafolioNavbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortafolioNavbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PortafolioRedesign');
}
