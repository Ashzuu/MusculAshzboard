import {Component, inject, OnInit, Signal} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import {MenuItem} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {ThemeService} from '../../../../core/services/theme/theme-service';

@Component({
  selector: 'ashz-header',
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private items: MenuItem[] = [];
  private themeService: ThemeService = inject(ThemeService)

  /**
   * Return all categories and items of the header.
   */
  public get Items():MenuItem[]{
    return this.items;
  }

  /**
   * Extract the icon to show in the header bar
   */
  public get Icon(): Signal<string>{
    return this.themeService.Icon;
  }

  /**
   * @inheritDoc
   */
  ngOnInit():void {
    this.items = [
      {
        label: 'Accueil',
        icon: "pi pi-home",
        routerLink: "/"
      },
      {
        label: 'Exercice',
        icon: 'pi pi-sparkles',
        items: [
          {
            label: 'Ajouter un nouvel exercice',
            icon: "pi pi-plus"
          },
          {
            label: 'Voir mes exercices',
            icon: "pi pi-check",
            routerLink: "/exercises"
          }
        ]
      },
      {
        label: 'Entrainement',
        icon: 'pi pi-bolt',
        items: [
          {
            label: 'Ajouter un nouvel entrainement',
            icon: "pi pi-plus"
          },
          {
            label: 'Voir mes entrainements',
            icon: "pi pi-check",
            routerLink: "/trainings"
          }
        ]
      },
      {
        label: 'Séance',
        icon: 'pi pi-sun',
        items: [
          {
            label: 'Prochaine séance prévue (todo)',
            icon: "pi pi-eye"
          },
          {
            label: 'Voir mes dernières séances',
            icon: "pi pi-check"
          }
        ]
      }
    ]
  }

  public changeTheme(){
    this.themeService.changeTheme();
  }
}

