import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.sass']
})
export class SequenceComponent implements OnInit {

  sequence: number[] = [1, 4, 5];
  target: number = 10;
  answer: number[] = [];
  
  @Output() output = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit(): void {
  }

  getAnswer() {
    if (this.target == null) {
      this.target = 0;
    }

    for (let i = 0; i < this.sequence.length; i++) {
      if (this.sequence[i] == null || this.sequence[i] < 0) {
        this.sequence[i] = 1;
      }
    }

    let seq = this.checkSequences();
    if (seq == 0) {
      this.output.emit([0]);
    } else {
      if (seq == -1) {
        this.output.emit([-1]);
      } else {
        this.output.emit(this.getCombination());
      }
    }
  }

  checkSequences() {
    if (this.target == 0) {
      return 0;
    }
      
    this.sequence.sort().reverse();

    this.answer = [];

    const combinations = new Array(this.target + 1).fill(0);
    combinations[0] = 1;

    for (const n of this.sequence) {
      for (let total = n; total < combinations.length; total++) {
        combinations[total] += combinations[total - n];
      }
    }

    if (combinations[this.target] == 0) {
      return -1;
    } else {
      return 1;
    }
  }

  getCombination() {
    let i = 0;
    let sum = 0;
    let attempt = 0;

    while (i <= this.sequence.length) {
      if (sum + this.sequence[i] <= this.target) {
        sum += this.sequence[i];
        this.answer.push(this.sequence[i]);
      } else {
        i++;
      }

      if (sum == this.target) {
        break;
      }
      
      if (i == this.sequence.length) {
        this.answer = [];
        sum = 0;
        attempt++;
        i = attempt;
      }
    }
    
    return this.answer;
  }

  removeFromSequence(i) {
    this.sequence.splice(i, 1);
  }

  addToSequence() {
    this.sequence.push(1);
  }

  clearFields() {
    this.sequence = new Array(this.sequence.length).fill(1);
  }
}
