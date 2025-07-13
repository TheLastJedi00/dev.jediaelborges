import { Component, Type } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from "../../pages/home/home.component";
import { AboutComponent } from "../../pages/about/about.component";
import { CurriculumComponent } from "../../pages/curriculum/curriculum.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule, RouterModule, MatTabsModule, HomeComponent, AboutComponent, CurriculumComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
