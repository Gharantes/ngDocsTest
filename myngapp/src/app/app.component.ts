import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
} from '@ng-doc/app';

@Component({
  imports: [
    RouterModule,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    NgDocRootComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myngapp';
}
