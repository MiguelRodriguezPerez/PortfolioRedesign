import { Component } from '@angular/core';
import { PulseDotComponent } from "./pulseDot/pulse-dot.component";

@Component({
  selector: 'cmd-availability',
  imports: [PulseDotComponent],
  templateUrl: './cmdAvailability.html',
  styleUrl: './cmdAvailability.scss',
})
export class CmdAvailability { }
