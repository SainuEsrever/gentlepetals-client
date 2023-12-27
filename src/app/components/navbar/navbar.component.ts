import { Component } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const navbar: HTMLElement = this.el.nativeElement.querySelector('.navbar');
    window.scrollY >= 50 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}}
