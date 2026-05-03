import { Component } from '@angular/core';
import { ImageDiv } from "./imageDiv/imageDiv";
import { InfoDiv } from "./infoDiv/infoDiv";

@Component({
  selector: 'main-banner',
  imports: [
    InfoDiv,
    ImageDiv
],
  templateUrl: './mainBanner.html',
  styleUrl: './mainBanner.scss',
})
export class MainBanner {}
