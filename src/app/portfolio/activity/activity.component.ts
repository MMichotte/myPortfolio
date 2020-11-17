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
  @Input() proofQuant: Number;
  @Input() proofExtension: string;
  @Input() proofText: string;

  @Output() newModalEvent = new EventEmitter<any>();

  modal_id: String = "";
  proof_id: String = "";

  constructor() { 
    id ++;
    this.modal_id = `#modal_${id}`;
    this.proof_id = `proof_${id}`;
  }

  ngOnInit(): void {
    let modal = {
      id: this.modal_id.substring(1),
      title: this.title,
      content: this.descriptionBody,
      proof: {
        id: this.proof_id,
        path: this.proofDir,
        proofQuant: this.proofQuant,
        extension: this.proofExtension,
        alt: this.proofAlt,
        text: this.proofText,
      }
    }
    this.newModalEvent.emit(modal);
  }

}
