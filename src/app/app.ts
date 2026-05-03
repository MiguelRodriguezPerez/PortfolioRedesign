import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortafolioNavbar } from "./navbar/portafolioNavbar/portafolioNavbar";
import { MainBanner } from "./mainBanner/mainBanner";
import { MarqueeSection } from "./marqueeSection/marqueeSection";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortafolioNavbar, MainBanner, MarqueeSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PortafolioRedesign');
}
