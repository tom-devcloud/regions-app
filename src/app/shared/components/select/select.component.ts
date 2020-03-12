import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options = [];
  @Input() disabled = false;
  @Input() controlId: string;
  @Input() controlName: string;
  @Input() label: string;

  @Output() selectedOption: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  optionSelect(value: any): void {
    this.selectedOption.emit(value);
  }
}
