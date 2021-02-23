import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: [
    './bar.component.css',
    '../menu/menu.component.css'
  ]
})
export class BarComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onMenuToggle(){
    this.menuToggle.emit();
  }

}
