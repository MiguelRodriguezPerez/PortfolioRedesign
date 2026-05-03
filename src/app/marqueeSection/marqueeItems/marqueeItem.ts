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
  SimpleSpring,
} from '@ng-icons/simple-icons';

import {
  diSpringOriginal,
  diJavaOriginal,
  diMysqlOriginal,
  diHtml5Original,
  diJavaOriginalWordmark,
} from '@ng-icons/devicon/original';

export interface MarqueeItem {
  name: string;
  iconName: string;  // nombre de la clave registrada en provideIcons
  iconSvg: string;   // SVG string para provideIcons
  color: string | null;
}

export const marqueeList: MarqueeItem[] = [
  { name: 'Angular',     iconName: 'SimpleAngular',           iconSvg: SimpleAngular,           color: '#DD0031' },
  { name: 'React',       iconName: 'SimpleReact',             iconSvg: SimpleReact,             color: '#61DAFB' },
  { name: 'Spring Boot', iconName: 'SimpleSpring',            iconSvg: SimpleSpring,        color: '#6DB33F' },
  { name: 'TypeScript',  iconName: 'SimpleTypescript',        iconSvg: SimpleTypescript,        color: '#3178C6' },
  { name: 'CSS3',        iconName: 'SimpleCss3',              iconSvg: SimpleCss3,              color: '#1572B6' },
  { name: 'Html',        iconName: 'simpleHtml5',             iconSvg: SimpleHtml5,         color: '#d6820b' },
  { name: 'JavaScript',  iconName: 'SimpleJavascript',        iconSvg: SimpleJavascript,        color: '#F7DF1E' },
  { name: 'Git',         iconName: 'SimpleGit',               iconSvg: SimpleGit,               color: '#F05032' },
  { name: 'Java',        iconName: 'diJavaOriginal',          iconSvg: diJavaOriginal,          color: 'red' },
  { name: 'Jwt',         iconName: 'SimpleJsonwebtokens',     iconSvg: SimpleJsonwebtokens,     color: '#ffffff' },
  { name: 'OpenAPI',     iconName: 'SimpleOpenapiinitiative', iconSvg: SimpleOpenapiinitiative, color: '#6BA539' },
  { name: 'MySQL',       iconName: 'SimpleMysql',             iconSvg: SimpleMysql,         color: '#ffffff' },
  { name: 'Docker',      iconName: 'SimpleDocker',            iconSvg: SimpleDocker,            color: '#2496ED' },
];


export const marqueeList2: MarqueeItem[] = [
  { name: 'Spring Boot', iconName: 'diSpringOriginal', iconSvg: diSpringOriginal, color: '#6DB33F' },
  { name: 'HTML',        iconName: 'diHtml5Original',  iconSvg: diHtml5Original,  color: '#ED8B00' },
  { name: 'Java',        iconName: 'diJavaOriginalWordmark',   iconSvg: diJavaOriginalWordmark,   color: null },
  { name: 'MySQL',       iconName: 'diMysqlOriginal',  iconSvg: diMysqlOriginal,  color: '#ffffff' },
];
