import { Component } from '@angular/core';
import { NgIconComponent , provideIcons } from '@ng-icons/core';
import { marqueeList, marqueeList2 } from './marqueeItems/marqueeItem';

import {
  SimpleAngular,
  SimpleReact,
  SimpleTypescript,
  SimpleCss3,
  SimpleJavascript,
  SimpleGit,
  SimpleDocker,
  SimpleJsonwebtokens,
  SimpleOpenapiinitiative,
  SimpleMysql,
  SimpleHtml5,
  SimpleSpring
} from '@ng-icons/simple-icons';

import {
  diJavaOriginal,
} from '@ng-icons/devicon/original';

@Component({
  selector: 'marquee-section',
  imports: [NgIconComponent],
   providers: [
    provideIcons({
      SimpleAngular,
      SimpleReact,
      SimpleTypescript,
      SimpleCss3,
      SimpleJavascript,
      SimpleGit,
      SimpleMysql,
      SimpleDocker,
      SimpleJsonwebtokens,
      SimpleOpenapiinitiative,
      SimpleSpring,
      diJavaOriginal,
      SimpleHtml5
    }),
  ],
  templateUrl: './marqueeSection.html',
  styleUrl: './marqueeSection.scss',
})
export class MarqueeSection { 
  items = marqueeList;
}
