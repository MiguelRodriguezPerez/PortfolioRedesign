import { Component } from '@angular/core';
import { ImageDiv } from "./imageDiv/imageDiv";
import { InfoDiv } from "./infoDiv/infoDiv";
import { InfoDivDescription } from "./infoDiv/infoDivDescription/infoDivDescription";

@Component({
  selector: 'main-banner',
  imports: [InfoDiv, ImageDiv, InfoDivDescription],
  templateUrl: './mainBanner.html',
  styleUrl: './mainBanner.scss',
})
export class MainBanner { }
