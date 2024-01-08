import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  winner:boolean=false;
  person:string='';
  title = 'SnakeAndLadder';
  squares: number[] = Array(100).fill(0);
  players: number[] = [0, 0];
  currentPlayer: number = 0; 
  rolledNumber: number | null = null;
  winnerImage: string | null = null;
  snakesAndLadders: { [key: number]: number } = {
     1:38,
     4:14,
     9:31,
     17:7,
     21:42,
     51:67,
     54:34,
     62:19,
     64:60,
     80:99,
     87:36,
     72:91,
     93:73,
     95:75,
     98:79
  };
  rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
  movePlayer(playerIndex: number, steps: number): void {
    this.players[playerIndex] += steps;
    if (this.snakesAndLadders[this.players[playerIndex]]) {
      this.players[playerIndex] = this.snakesAndLadders[this.players[playerIndex]];
    }
  }
  switchPlayer(): void {
    this.currentPlayer = 1 - this.currentPlayer;
  }
  ngOnInit(): void {
    let j:number=100;
    for(let i = 0; i < 100; i++){
      this.squares[i] = j;
      j--;
    }
    for(let i = 10; i < 100 ; i+= 20){
      for(let j = 0, k = 9; j < k; j++, k--){
        let temp = this.squares[i+j];
        this.squares[i+j] = this.squares[i+k];
        this.squares[i+k] = temp;
      }
    }
  }
  constructor(){
  }
  rollAndMove(): void {
    this.rolledNumber = this.rollDice(); // Store the rolled number
    const steps = this.rolledNumber;
    this.movePlayer(this.currentPlayer, steps);
    if (this.players[this.currentPlayer] >= this.squares.length - 1) {
          this.person = this.currentPlayer === 0 ? "red color" : "blue color";
          this.winner=true;
          setTimeout(() => {
            this.resetGame();
          }, 5000);
        }
        else{
          this.switchPlayer();
        }
  }
  resetGame(): void {
    this.winnerImage = null;
    this.players = [1, 1];
    this.currentPlayer = 0;
    this.rolledNumber = null;
    this.winner=false;
    this.person='';
  }

}
