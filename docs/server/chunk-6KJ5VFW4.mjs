import './polyfills.server.mjs';
import{A as N,B as L,C as q,D as j,E as F,H as I,N as k,a as d,b as v,c as p,d as h,e as x,f as y,g as c,h as s,i as u,j as a,k as l,l as _,m as b,n as C,o as m,p as P,q as M,r as O,s as A}from"./chunk-SMPD46N2.mjs";var D=[],S=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p({type:e}),e.\u0275inj=d({imports:[k.forRoot(D),k]});let i=e;return i})();function E(i,e){i&1&&_(0,"img",10)}function V(i,e){i&1&&_(0,"img",11)}var G=(i,e,n,r)=>({snake:i,ladder:e,"landed-on-snake":n,"landed-on-ladder":r});function Q(i,e){if(i&1&&(a(0,"div",7),u(1,E,1,0,"img",8)(2,V,1,0,"img",9),l()),i&2){let n=e.$implicit,r=e.index,t=m();s("ngClass",A(3,G,t.snakesAndLadders[r]<n,t.snakesAndLadders[r]>n,t.players[t.currentPlayer]===n&&t.snakesAndLadders[n]&&t.snakesAndLadders[n]<n,t.players[t.currentPlayer]===n&&t.snakesAndLadders[n]&&t.snakesAndLadders[n]>n)),c(1),s("ngIf",t.players[0]===n),c(1),s("ngIf",t.players[1]===n)}}function R(i,e){if(i&1){let n=b();a(0,"img",12),C("click",function(){h(n);let t=m();return x(t.rollAndMove())}),l()}i&2&&s("src","assets/dice/1.png",y)}var U=(i,e)=>({red:i,blue:e});function W(i,e){if(i&1){let n=b();a(0,"img",13),C("click",function(){h(n);let t=m();return x(t.rollAndMove())}),l()}if(i&2){let n=m();s("src","assets/dice/"+n.rolledNumber+".png",y)("ngClass",O(2,U,n.currentPlayer===0,n.currentPlayer===1))}}var f=(()=>{let e=class e{rollDice(){return Math.floor(Math.random()*6)+1}movePlayer(r,t){this.players[r]+=t,this.snakesAndLadders[this.players[r]]&&(this.players[r]=this.snakesAndLadders[this.players[r]])}switchPlayer(){this.currentPlayer=1-this.currentPlayer}ngOnInit(){let r=100;for(let t=0;t<100;t++)this.squares[t]=r,r--;for(let t=10;t<100;t+=20)for(let o=0,g=9;o<g;o++,g--){let T=this.squares[t+o];this.squares[t+o]=this.squares[t+g],this.squares[t+g]=T}}constructor(){this.winner=!1,this.person="",this.title="SnakeAndLadder",this.squares=Array(100).fill(0),this.players=[0,0],this.currentPlayer=0,this.rolledNumber=null,this.winnerImage=null,this.snakesAndLadders={1:38,4:14,9:31,17:7,21:42,51:67,54:34,62:19,64:60,80:99,87:36,72:91,93:73,95:75,98:79}}rollAndMove(){this.rolledNumber=this.rollDice();let r=this.rolledNumber;this.movePlayer(this.currentPlayer,r),this.players[this.currentPlayer]>=this.squares.length-1?(this.person=this.currentPlayer===0?"red color":"blue color",this.winner=!0,setTimeout(()=>{this.resetGame()},5e3)):this.switchPlayer()}resetGame(){this.winnerImage=null,this.players=[1,1],this.currentPlayer=0,this.rolledNumber=null,this.winner=!1,this.person=""}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=v({type:e,selectors:[["app-root"]],decls:11,vars:4,consts:[[1,"board-container"],[1,"board"],["class","square",3,"ngClass",4,"ngFor","ngForOf"],[1,"number"],[1,"dice-container"],["class","dice","alt","Dice",3,"src","click",4,"ngIf"],["class","dice","alt","Dice",3,"src","ngClass","click",4,"ngIf"],[1,"square",3,"ngClass"],["src","assets/red.jpg","alt","Player 1","class","player-image player1",4,"ngIf"],["src","assets/blue.jpg","alt","Player 2","class","player-image player2",4,"ngIf"],["src","assets/red.jpg","alt","Player 1",1,"player-image","player1"],["src","assets/blue.jpg","alt","Player 2",1,"player-image","player2"],["alt","Dice",1,"dice",3,"src","click"],["alt","Dice",1,"dice",3,"src","ngClass","click"]],template:function(t,o){t&1&&(a(0,"header")(1,"h1"),P(2,"Welcome To Snake & Ladder Game"),l()(),a(3,"div",0)(4,"div",1),u(5,Q,3,8,"div",2),l()(),a(6,"div",3),P(7),l(),a(8,"div",4),u(9,R,1,1,"img",5)(10,W,1,5,"img",6),l()),t&2&&(c(5),s("ngForOf",o.squares),c(2),M(" ",o.rolledNumber,`
`),c(2),s("ngIf",o.rolledNumber==null),c(1),s("ngIf",o.rolledNumber!==null))},dependencies:[N,L,q],styles:['.board-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.dice-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;margin-left:150px;margin-top:5px}.landed-on-snake[_ngcontent-%COMP%]{border:2px solid #FF0000;background-color:#0f0}.landed-on-ladder[_ngcontent-%COMP%]{background-color:#ff0}.dice.red[_ngcontent-%COMP%]{background-color:#f00909}.dice.blue[_ngcontent-%COMP%]{background-color:#5e27eb}.board[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(10,2fr);width:300px;height:300px;position:relative;z-index:1;margin-left:0}.board[_ngcontent-%COMP%]:before{position:relative;background-image:url(https://miro.medium.com/v2/resize:fit:978/1*Qocq8CWeN3yacR_dxxbuiQ.png);background-position:8px -615px;margin:0;content:"";position:absolute;bottom:500px;top:0;left:0;width:656px;height:645px;background-image:url(https://miro.medium.com/v2/resize:fit:978/1*Qocq8CWeN3yacR_dxxbuiQ.png);background-size:cover;background-position:right 20px bottom 20px;background-repeat:no-repeat;z-index:-1}.square[_ngcontent-%COMP%]{width:60px;height:60px;border:1px solid black}.player[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;border-radius:50%}.player1[_ngcontent-%COMP%], .player2[_ngcontent-%COMP%]{width:75%;height:75%;padding:5px}.dice[_ngcontent-%COMP%]{width:100px;height:100px;cursor:pointer}.winner-message[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}.winner-image[_ngcontent-%COMP%]{width:150px;height:150px;margin-bottom:10px}header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#3498db,#e74c3c);color:#fff;text-align:center;padding:30px;box-shadow:0 4px 8px #0003}h1[_ngcontent-%COMP%]{margin:0;font-size:2.5em;font-family:Pacifico,cursive;font-weight:700;letter-spacing:2px}h1[_ngcontent-%COMP%]:hover{text-shadow:2px 2px 4px rgba(63,18,18,.8);transition:text-shadow .3s}.number[_ngcontent-%COMP%]{font-size:50px;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;padding-left:180px}.win[_ngcontent-%COMP%]{font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700;font-size:100px}']});let i=e;return i})();var z=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p({type:e,bootstrap:[f]}),e.\u0275inj=d({providers:[F()],imports:[j,S]});let i=e;return i})();var B=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p({type:e,bootstrap:[f]}),e.\u0275inj=d({imports:[z,I]});let i=e;return i})();export{B as a};
