import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string;
  public date: number;


  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Angular + Bootstrap';
    this.date = new Date().getFullYear();
  }

  public buttonClicked(): void {
    this.router.navigate(['portal']);
  }

}
