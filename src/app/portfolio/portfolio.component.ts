import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  imageLoader = true;
  title: String = '';
  descriptionBody: String = '';

  modals: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addModal(m: any) {
    this.modals.push(m);
  }

  slideN:number = 0;

  displayProof(id:string){
    this.slideN = 0;
    document.getElementById(id).style.display="block";
  }

  hideProof(id:string){
    document.getElementById(id).style.display="none";
  }

  nextIm(n:number, imgs:number){
    let tester = this.slideN + n;
    if(tester >= 0 && tester < imgs){
      this.slideN = tester;
      this.imageLoader = true;
    } 
  }

}
