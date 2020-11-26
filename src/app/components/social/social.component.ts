import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.sass']
})
export class SocialComponent implements OnInit, AfterViewInit {

  @Input() image: string;
  imgsrc: string;
  id: string;

  constructor() { }

  ngOnInit(): void {
      this.imgsrc = "url('../../../assets/Imagem " + this.image + "@2x.png')";
      this.id = "social" + this.image;
  }

  ngAfterViewInit(): void {
    document.getElementById(this.id).style.backgroundImage = this.imgsrc;
  }
}
