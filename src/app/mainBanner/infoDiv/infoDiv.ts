import { Component } from '@angular/core';
import { CmdAvailability } from "./cmdAvailability/cmdAvailability";

@Component({
  selector: 'info-div',
  imports: [CmdAvailability],
  templateUrl: './infoDiv.html',
  styleUrl: './infoDiv.scss',
})
export class InfoDiv { }
