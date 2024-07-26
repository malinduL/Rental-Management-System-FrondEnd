import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HardwareItemComponent } from './page/hardware-item/hardware-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HardwareItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rms-app';
}
