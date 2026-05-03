import { Component } from '@angular/core';
import { PortfolioButton } from "../../../shared/components/portfolioButton/portfolioButton";

@Component({
  selector: 'button-section',
  imports: [PortfolioButton],
  templateUrl: './buttonSection.html',
  styleUrl: './buttonSection.scss',
})
export class ButtonSection { }
