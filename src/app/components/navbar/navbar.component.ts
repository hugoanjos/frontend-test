import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isDarkTheme: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.isDarkTheme = false;
    } else {
      this.themeService.setDarkTheme();
      this.isDarkTheme = true;
    }
  }

}
