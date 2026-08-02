import {Component, inject, Signal} from '@angular/core';
import {Header} from "./header/header";
import {ThemeService} from '../../../core/services/theme/theme-service';

@Component({
  selector: 'ashz-base-layout',
  imports: [
    Header
  ],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.scss',
})
export class BaseLayout {
}
