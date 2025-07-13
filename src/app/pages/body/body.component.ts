import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import {MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HeaderComponent, MatTabsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
}
