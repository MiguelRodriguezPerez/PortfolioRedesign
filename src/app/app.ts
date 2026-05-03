import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortafolioNavbar } from "./navbar/portafolioNavbar/portafolioNavbar";
import { MainBanner } from "./mainBanner/mainBanner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortafolioNavbar, MainBanner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PortafolioRedesign');
}
