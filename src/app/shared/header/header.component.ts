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
  isDropdownOpen = false;


  constructor(private renderer: Renderer2) {}




  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  toggleMenu() {

    this.isMenuOpen = !this.isMenuOpen;
  }
}
