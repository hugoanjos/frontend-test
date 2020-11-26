import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.sass']
})
export class SequenceComponent implements OnInit {

  private sequence: number[] = [];
  private target: number;
  private answer: number[] = [];
  
  output: string;

  constructor() { }

  ngOnInit(): void {
    let seq = this.checkSequences();
    if (seq == 0) {
      this.output = "A resposta é 0";
    } else {
      if (seq == -1) {
        this.output = "Não existem possibilidades"
      } else {
        this.output = this.getCombination().toString();
      }
    }
  }

  checkSequences() {
    if (this.target == 0) {
      return 0;
    }

    this.sequence = [2, 7];
    this.sequence.sort().reverse();

    this.target = 8;

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

}
