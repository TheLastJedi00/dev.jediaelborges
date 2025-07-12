import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-devicon',
  standalone: true,
  imports: [],
  templateUrl: './devicon.component.html',
  styleUrl: './devicon.component.scss'
})
export class DeviconComponent {
@Input() text: string = '';
@Input() src: string = '';
@Input() alt: string = '';
}
