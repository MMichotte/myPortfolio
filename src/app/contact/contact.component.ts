import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('successMsg') successMsg: ElementRef;
  
  FormData: FormGroup;
  
  constructor(
    private builder: FormBuilder,
    private contact: ContactService
    ) { }

  ngOnInit(): void {
    this.FormData = this.builder.group(
      {
        Fullname: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        Comment: new FormControl('', [Validators.required])
      })
  }

  get nameControl(): any {return this.FormData.get('Fullname');};
  get emailControl(): any {return this.FormData.get('Email');};
  get commentControl(): any {return this.FormData.get('Comment');};

  onSubmit(FormData) {
    this.contact.postMessage(FormData).subscribe(
      response => {
        location.href = 'https://mailthis.to/confirm' //TODO virer cette merde
        this.FormData.reset();
        this.successMsg.nativeElement.style = 'display: block';
        setTimeout(() => {
          this.successMsg.nativeElement.style = 'display: none';
        },5000);
      }, 
      error => {
        console.warn(error.responseText)
        console.log({ error }) //TODO
    })
  }
  
}
