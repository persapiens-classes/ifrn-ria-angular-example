import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'account'

  name = ''
  names: Array<string> = []

  insert() {
    this.names.push(this.name)
  }

  remove(nameToRemove: string) {
    this.names = this.names.filter(internalName => internalName !== nameToRemove)
  }
}
