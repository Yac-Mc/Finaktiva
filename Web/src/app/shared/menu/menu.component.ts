import { Component, OnInit, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  @Output() menuToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onCloseMenu(){
    this.menuToggle.emit();
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
