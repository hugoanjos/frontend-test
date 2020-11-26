import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.sass']
})
export class AnswersComponent implements OnInit, OnChanges {

  @Input() answers: number[];
  isAnswer: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.answers) {
      if (this.answers.length == 1) {
        if (this.answers[0] == 0 || this.answers[0] == -1) {
          this.isAnswer = false;
        } else {
          this.isAnswer = true;
        }
      } else {
        this.isAnswer = true;
      }
    }
   
  }



}
