import {Component, Signal, signal, WritableSignal} from '@angular/core';
import {BaseLayout} from "@shared/layout/base-layout/base-layout";
import {CardStats} from "./card-stats/card-stats";

@Component({
  selector: 'ashz-home-page',
  imports: [
    BaseLayout,
    CardStats
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
}
