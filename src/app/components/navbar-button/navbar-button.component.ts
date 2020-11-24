import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.sass']
})
export class NavbarButtonComponent implements OnInit {

  @Input() name: string 
  @Input() route: string
  @Input() icon: string

  @Input() isDarkTheme: boolean

  mouseHover: boolean

  constructor() { }

  ngOnInit(): void {
    this.mouseHover = false;
    this.icon = "../../../assets/" + this.icon + ".svg";
  }

  changeHover() {
    this.mouseHover = !this.mouseHover;
  }
}
