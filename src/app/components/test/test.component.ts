import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  answers: number[];

  constructor() { }

  ngOnInit(): void {
  }

  getAnswers(answers) {
    this.answers = answers;
  }

}
