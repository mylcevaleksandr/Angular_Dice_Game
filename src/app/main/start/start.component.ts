import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public randomNumberFirst: number = 0;
  public randomNumberSecond: number = 0;
  public isRotating: boolean = false;
  public firstPlayerWins: boolean = false;
  public secondPlayerWins: boolean = false;
  public draw: boolean = false;

  constructor() {
    const initialRandomNumber = this.generateRandomNumber();
    this.randomNumberFirst = initialRandomNumber;
    this.randomNumberSecond = initialRandomNumber;
  }

  ngOnInit(): void {
  }

  public rollDice(): void {
    if (!this.isRotating) {
      this.isRotating = true;
      setTimeout(() => {
        this.randomNumberFirst = this.generateRandomNumber();
        this.randomNumberSecond = this.generateRandomNumber();
        this.isRotating = false;
        this.findWinner();
      }, 2000);
    }
  }

  public isDiceRolling(): boolean {
    return this.isRotating;
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  private findWinner(): void {
    this.firstPlayerWins = false;
    this.secondPlayerWins = false;
    this.draw=false
    if (this.randomNumberFirst > this.randomNumberSecond) {
      this.firstPlayerWins = true;
    } else if (this.randomNumberSecond > this.randomNumberFirst) {
      this.secondPlayerWins = true;
    } else {
      this.draw = true;
    }
  }
}
