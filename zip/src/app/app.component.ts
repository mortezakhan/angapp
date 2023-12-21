import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
isCorrect:boolean=true;
styles={};

ngOnInit(): void {
  this.styles={
    //'font-size':'2rem',
    'font-size':this.isCorrect?'2rem':'8rem',
    'color':'red'
  }
}
}

