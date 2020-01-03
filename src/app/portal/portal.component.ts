import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  public title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'This is our portal!';
  }

}
