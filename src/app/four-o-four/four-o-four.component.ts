import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-four-o-four',
  templateUrl: './four-o-four.component.html',
  styleUrls: ['./four-o-four.component.scss']
})
export class FourOFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("main").style.margin = "0";
    document.getElementById("myNav").style.display = "none";
    

    $(document).mousemove(function (event) {
      $('.torch').css({
        'top': event.pageY,
        'left': event.pageX
      });
    });
  }

  



}
