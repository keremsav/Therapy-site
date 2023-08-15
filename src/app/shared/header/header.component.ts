import {Component, HostListener, Renderer2} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen : boolean = false;
  isHeaderBlurred = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const header = document.querySelector('.header');

    if (scrollY > 0) {
      this.renderer.addClass(header, 'blurred');
      this.isHeaderBlurred = true;
    } else {
      this.renderer.removeClass(header, 'blurred');
      this.isHeaderBlurred = false;
    }
  }
}
