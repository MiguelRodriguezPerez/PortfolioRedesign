import { Component } from '@angular/core';
import { CmdAvailability } from "./cmdAvailability/cmdAvailability";
import { ConstHeading } from "./constHeading/constHeading";
import { RoleFocusStack } from "./roleFocusStack/roleFocusStack";
import { InfoDivDescription } from "./infoDivDescription/infoDivDescription";
import { ButtonSection } from "./buttonSection/buttonSection";

@Component({
  selector: 'info-div',
  imports: [CmdAvailability, ConstHeading, RoleFocusStack, InfoDivDescription, ButtonSection],
  templateUrl: './infoDiv.html',
  styleUrl: './infoDiv.scss',
})
export class InfoDiv { }
