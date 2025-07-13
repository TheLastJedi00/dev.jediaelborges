import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [ FooterComponent, CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss',
})
export class CurriculumComponent {
  hardSkills: string[] = [
    'Java & Spring',
    'TypeScript & Angular',
    'Git & GitHub',
    'Kanban & Scrum',
    'Testes Unitários',
    'JavaScript & React',
    'English B1'
  ];
softSkills: string[] =[
  'Pensamento crítico',
  'Adaptabilidade a mudanças',
  'Aberto a feedback',
  'Aprendizado contínuo',
  'Gestão de tempo',
  'Escuta ativa',
  'Comunicação clara',
];
progressSkills: string[] = [
  'Kotlin & Spring',
  'NextJS',
  'English B2'
  ];
}
