//footer ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public currentDateTime: Date;

  constructor() {
    this.currentDateTime = new Date();
  }

  ngOnInit(): void {

    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}
