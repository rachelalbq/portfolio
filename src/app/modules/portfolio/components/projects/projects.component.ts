import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { EDialogPanelClass } from '../../../../../enum/EDialogPanelClass.enum';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/make-your-burger.jpg',
      alt: "Projeto Make your Burger",
      title: "Make your Burger",
      width: '80%',
      height: '80%',
      description: 'Projeto para gerenciar pedidos.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/rachelalbq/Make-Your-Burger'
        }
      ]
    },
    {
      src: 'assets/img/projects/gitsmart.png',
      alt: "Projeto GitSmart",
      title: "GitSmart ",
      width: '80%',
      height: '80%',
      description: 'Consultar repositórios Git e manipular Issues.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/rachelalbq/GitSmart'
        }
      ]
    },
    {
      src: 'assets/img/projects/rick-and-morty.jpg',
      alt: "Projeto Rick and Morty",
      title: "Rick and Morty",
      width: '80%',
      height: '80%',
      description: 'Aplicação web feita em Angular que permite aos usuários buscar e visualizar informações sobre personagens de Rick and Morty.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/rachelalbq/app-rick-and-morty'
        }
      ]
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
