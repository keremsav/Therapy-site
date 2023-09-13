import {Component, HostListener, Renderer2} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen : boolean = false;
  isHeaderBlurred = false;
  isDropdownOpen = false;


  constructor(private renderer: Renderer2, private router: Router, private route: ActivatedRoute) {}




  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  toggleMenu() {

    this.isMenuOpen = !this.isMenuOpen;
  }
}
