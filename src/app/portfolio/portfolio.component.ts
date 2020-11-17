import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  title: String = '';
  descriptionBody: String = '';

  modals: any[] = [];
  proofs: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addModal(m: any) {
    this.modals.push(m);
  }

  addProof(p: any) {
    this.proofs.push(p);
  }

  displayProof(){
    console.log('ok');
  }
}
