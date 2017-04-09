import {Component, Inject, OnInit} from '@angular/core';
import {JQ_TOKEN} from "./services/JQuery.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(@Inject(JQ_TOKEN) private $: any) {
  }


  ngOnInit(): void {
    this.$(".js-example-basic-multiple").select2();

  }

}
