import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Frontend Developer',
        p: 'Metasix Tecnologia | Jun 2024 - Atual'
      },
      text: '<p>Atuo como desenvolvedora Frontend, utilizando Html5, Css3, Javascript, TypeScript, Angular, Bootstrap e Primeng. </p> <p>Além disso, minha experiência abrange a integração com Docker, GitLab e Jira. <p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando Angular, como parte do compromisso com a eficiência e a qualidade do código.</p>'
    },
    {
      summary: {
        strong: 'Frontend Developer',
        p: 'Pic Envios | Nov 2023 - Abr 2024'
      },
      text: '<p>Desenvolvimento e implementação de novas funcionalidades em sistema legado utilizando Html5, Css3, Javascript, TypeScript, Angular e Bootstrap.</p>  <p>Durante esse período, enfrentei e superei desafios significativos, destacando-se o desenvolvimento de um sistema para cotação e rastreamento de envios.</p>'
    },
    {
      summary: {
        strong: 'Frontend Developer',
        p: 'Unlocked  | Jun 2023 - Jun 2024'
      },
      text: '<p>Atuei no desenvolvimento e manutenção de um software de desenvolvimento pessoal no ambiente de trabalho usando Angular e Typescript</p> <p>No front-end, criei novas funcionalidades em uma plataforma de Desenvolvimento Socioemocional e Programas de Mentoria, a qual foi adquirida por clientes de destaque como Heineken, PetLove, Raízen e KraftHeinz.</p'
    },
    {
      summary: {
        strong: 'Frontend Developer',
        p: 'Soma | Mai 2022 - Jun 2023'
      },
      text: '<p>Atuei no desenvolvimento de um portal que se tornou o epicentro das operações da empresa, unificando processos e facilitando a gestão eficiente de diversas atividades.</p> <p>No front-end, desenvolvi habilidades com Html5, Css3, Javascript, TypeScript Ionic e Angular.</p>'
    }
  ])
}
