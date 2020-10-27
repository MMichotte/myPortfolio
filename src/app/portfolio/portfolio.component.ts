import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideN:number = 0;

  displayProof(p:String){
    this.slideN = 0;
    if (p == 'Ang'){
      document.getElementById("AngularProof").style.display="block";
    }
    if (p == 'Node'){
      document.getElementById("NodeProof").style.display="block";
    }
    if (p == 'Scouts'){
      document.getElementById("ScoutsProof").style.display="block";
    }
    if (p == 'SlgApp'){
      document.getElementById("SlgProof").style.display="block";
    }
  }

  hideProof(p:String){
    if (p == 'Ang'){
      document.getElementById("AngularProof").style.display="none";
    }
    if (p == 'Node'){
      document.getElementById("NodeProof").style.display="none";
    }
    if (p == 'Scouts'){
      document.getElementById("ScoutsProof").style.display="none";
    }
    if (p == 'SlgApp'){
      document.getElementById("SlgProof").style.display="none";
    }
  }

  nextIm(n:number, imgs:number){
    let tester = this.slideN + n;
    if(tester >= 0 && tester < imgs){
      this.slideN = tester;
    } 
  }

}
