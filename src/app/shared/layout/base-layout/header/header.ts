import {Component, OnInit} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'ashz-header',
  imports: [MenubarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private items: MenuItem[] = [];

  public get Items():MenuItem[]{
    return this.items;
  }

  /**
   * @inheritDoc
   */
  ngOnInit():void {
    this.items = [
      {
        label: 'Accueil',
        icon: "pi pi-home"
      },
      {
        label: 'Exercice',
      },
      {
        label: 'Entrainement'
      },
      {
        label: 'Séance'
      }
    ]
  }
}

