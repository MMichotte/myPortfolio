import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


let id = 0;

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() coverImg: string;
  @Input() imgAlt: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() descriptionBody: string;
  @Input() proofDir: string;
  @Input() proofAlt: string;

  @Output() newModalEvent = new EventEmitter<any>();

  modal_id: String = "";

  constructor() { 
    id ++;
    this.modal_id = `#modal_${id}`;
  }

  ngOnInit(): void {
    let modal = {
      id: this.modal_id.substring(1),
      title: this.title,
      content: this.descriptionBody,
    }
    this.newModalEvent.emit(modal);
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
    if (p == 'Game'){
      document.getElementById("GameProof").style.display="block";
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
    if (p == 'Game'){
      document.getElementById("GameProof").style.display="none";
    }
  }

  nextIm(n:number, imgs:number){
    let tester = this.slideN + n;
    if(tester >= 0 && tester < imgs){
      this.slideN = tester;
    } 
  }

}
