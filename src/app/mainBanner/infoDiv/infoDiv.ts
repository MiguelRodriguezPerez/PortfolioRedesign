import { Component } from '@angular/core';
import { CmdAvailability } from "./cmdAvailability/cmdAvailability";
import { ConstHeading } from "./constHeading/constHeading";
import { RoleFocusStack } from "./roleFocusStack/roleFocusStack";
import { InfoDivDescription } from "./infoDivDescription/infoDivDescription";

@Component({
  selector: 'info-div',
  imports: [CmdAvailability, ConstHeading, RoleFocusStack, InfoDivDescription],
  templateUrl: './infoDiv.html',
  styleUrl: './infoDiv.scss',
})
export class InfoDiv { }
