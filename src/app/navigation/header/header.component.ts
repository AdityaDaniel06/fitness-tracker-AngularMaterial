import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
  onToggle(){
this.sidenavToggle.emit();
  }
}
