import { Component, Renderer2 } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
  faGlobeEurope,
  faMoon,
  faSun,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo6';

  emoji =
    'https://raw.githubusercontent.com/enriquetecfan11/enriquetecfan11/main/memojitecfannofondo.png';
  moon = faMoon;
  sun = faSun;
  isNightMode = false;

  socialNetworks = [
    {
      link: 'http://github.com/enriquetecfan11',
      image: faGithub,
      title: 'Mis proyectos de github',
    },
    {
      link: 'https://twitter.com/enriquetecfan',
      image: faTwitter,
      title: 'Este es mi twitter',
    },
    {
      link: 'https://informatica404.com',
      image: faLaptop,
      title: 'La web de Informatica 404',
    },
    {
      link: 'https://www.linkedin.com/in/enrique-rodriguez-vela/',
      image: faLinkedin,
      title: 'Mi linkedin',
    },
  ];

  constructor(private renderer: Renderer2) {}

  nightMode() {
    this.isNightMode = !this.isNightMode;
    if (this.isNightMode) {
      this.renderer.addClass(document.body, 'night');
    } else {
      this.renderer.removeClass(document.body, 'night');
    }
  }
}
