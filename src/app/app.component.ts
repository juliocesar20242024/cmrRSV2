import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
//import { SwitcherComponent } from './components/switcher/switcher.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink,MatDialogModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cmrRSV2';
}
