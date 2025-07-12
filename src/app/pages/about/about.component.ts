import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { DeviconComponent } from "../../shared/devicon/devicon.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DeviconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
