import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-index',
  imports: [CommonModule, RouterOutlet, RouterLink, MatDialogModule],
  templateUrl: './index.component.html',
  standalone: true,
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
