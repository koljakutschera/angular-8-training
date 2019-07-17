import { Component, OnInit } from "@angular/core";

@Component({
  selector: "bm-home",
  template: `
    <a routerLink="../books" class="ui red button">
      Buchliste ansehen
      <i class="right arrow icon"></i>
    </a>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
